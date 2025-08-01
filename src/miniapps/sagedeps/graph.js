
/***
 * Filter settings.
 */
const settings = {
    minScore: 100,
    path: "sage.rings",
    edgeTypes: new Set([0,1,2,3,4,5])
}

/***
 * Create cytoscape instance.
 */
const cy = cytoscape({
    container: document.getElementById('cy'),
    //elements: data.elements,
    style: [
    {
        selector: 'node',
        style: {
        'label': 'data(id)',
        'background-color': '#29b6f6',
        'text-valign': 'center',
        'text-halign': 'center',
        'color': '#fff',
        'font-size': '10px'
        }
    },
    {
        selector: ':parent',
        style: {
        'background-color': '#455a64',
        'text-valign': 'top',
        'padding': 10,
        'font-size': '12px'
        }
    },
    {
        selector: 'edge',
        style: {
        'width': 2,
        'line-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#ccc',
        'curve-style': 'bezier',
        //'label': 'data(label)',
        'font-size': '8px',
        'color': '#aaa',
        'line-style': 'dashed'
        }
    },
    {
        selector: 'edge[type = 5]', // inheritance
        style: {
        'line-color': '#0074D9',
        'target-arrow-shape': 'triangle',
        'target-arrow-color': '#0074D9',
        'line-style': 'solid'
        }
    },
    {
        selector: 'edge[type = 4]', // attribute
        style: {
        'line-color': '#2ECC40',
        'target-arrow-shape': 'circle',
        'target-arrow-color': '#2ECC40',
        'line-style': 'solid'
        }
    },
    {
        selector: 'edge[type = 3]', // invocation
        style: {
        'line-color': '#FF851B',
        'target-arrow-shape': 'vee',
        'target-arrow-color': '#FF851B',
        'line-style': 'solid'
        }
    },
    {
        selector: 'edge[type = 2]', // weak invocation
        style: {
        'line-color': '#FF750B',
        'target-arrow-shape': 'vee',
        'target-arrow-color': '#FF851B',
        'line-style': 'solid'
        }
    }
    ],
});

/***
 * Keeps track of modules that have been collapsed.
 */
const collapsedModules = new Set();

/***
 * Keeping track of parents of loaded nodes in case filter status changes.
 */
const deferredParentMap = new Map();

/***
 * Determines if node with id `ancestorId` is an ancestor of node `nodeId`.
 */
function isAncestor(ancestorId, nodeId) {
    let current = cy.getElementById(nodeId);
    while (current.data('parent')) {
    if (current.data('parent') === ancestorId) return true;
    current = cy.getElementById(current.data('parent'));
    }
    return false;
}

function getAllAncestors(nodeId) {
    const ancestors = new Set();
    let node = cy.getElementById(nodeId);
    ancestors.add(node);
    while (node.data('parent')) {
    node = cy.getElementById(node.data('parent'));
    ancestors.add(node);
    }
    return ancestors
}

/***
 * Create edges between modules whose children have edges going between them.
 */
function createSuperEdges() {
    cy.edges().forEach(
    edge => {
        const sourceAncestors = getAllAncestors(edge.data('source'));
        const targetAncestors = getAllAncestors(edge.data('target'));

        sourceAncestors.forEach(
        source => {
            targetAncestors.forEach(
            target => {
                if (
                source.id() != target.id() && 
                !isAncestor(source.id(), target.id()) && 
                !isAncestor(target.id(), source.id())
                ) {
                const superId = `${source.id()}-${target.id()}`;
                let superEdge = cy.getElementById(superId);
                if (superEdge.length === 0) {
                    superEdge = cy.add({
                    group: 'edges',
                    data: {
                        id: superId,
                        source: source.id(),
                        target: target.id(),
                        isSuper: true,
                        type: edge.data('type'),
                    }
                    });
                } else if (edge.data('type') > superEdge.data('type')) {
                    superEdge.data('type', edge.data('type'))
                }
                }
            }
            )
        }
        )
    }
    )
}

/***
 * Updates the visibility of all edges by determining if its end nodes are visible,
 * and if they are leaf nodes or collapsed modules.
 */
function showVisibleEdges() {
    cy.edges().forEach( edge => {
    const sourceNode = cy.getElementById(edge.data('source'));
    const targetNode = cy.getElementById(edge.data('target'));
    const sourceNotExpanded = collapsedModules.has(sourceNode.id()) || !sourceNode.isParent()
    const targetNotExpanded = collapsedModules.has(targetNode.id()) || !targetNode.isParent()
    if (sourceNode.visible() && targetNode.visible() && sourceNotExpanded && targetNotExpanded) {
        edge.show()
    } else {
        edge.hide()
    }
    });
}

/***
 * Recursively collapses a module and all descendents.
 * Typically called as a subroutine of collapseModule and collapseAllmodules.
 */
function collapseRecursive(subModuleId) {
    //if (collapsedModules.has(subModuleId)) return;
    collapsedModules.add(subModuleId);
    //console.log(`Collapsing ${moduleId}`)
    const childNodes = cy.nodes(`[parent = "${subModuleId}"]`);

    // Collapse nested modules first
    childNodes.forEach(child => {
    if (child.isParent()) {
        collapseRecursive(child.id());
    }
    });

    // Hide children and edges
    childNodes.forEach(n => n.hide());
}

/***
 * Collapses a module and updates edge visibility.
 */
function collapseModule(moduleId) {
    collapseRecursive(moduleId);
    showVisibleEdges();
}

/***
 * Expands a module and, if applicable, all ancestor modules.
 */
function expandModule(moduleId) {
    // Recursively expand parent modules
    const module = cy.getElementById(moduleId);
    if (module.data('parent')) {
    expandModule(module.data('parent'));
    }

    const childNodes = cy.nodes(`[parent = "${moduleId}"]`);
    collapsedModules.delete(moduleId);

    // Show original nodes and edges
    childNodes.forEach(n => n.show());
    showVisibleEdges();
}

/***
 * Collapses all modules but does not update edge visibility status .
 * Visibility status needs to be done separately.
 */
function collapseAllModules() {
    const allModules = cy.nodes().filter(n => n.isParent());
    allModules.forEach(module => collapseRecursive(module.id()));
}

/***
 * Takes a json of node and edge data and returns a filtered set of data.
 */
function getFilteredElements(data, settings) {

    data.elements.edges.forEach(
    edge => {
        if (edge.data.id === "sage.rings.polynomial.multi_polynomial_ideal.MPolynomialIdeal-sage.rings.integer.Integer") {
        console.log(edge)
        }
    }
    )
    const nodes = data.elements.nodes.filter(
    node =>
    node.data.score > settings.minScore &&
    node.data.id.startsWith(settings.path)
    );
    const nodeIds = nodes.map(node => node.data.id);

    // Stores a map parentId -> childId when child is loaded in but parent is not 
    nodes.forEach(
        node => {
            if (node.data.parent && !nodeIds.includes(node.data.parent) && !deferredParentMap.has(node.data.parent)) {
            deferredParentMap.set(node.data.parent, node.data.id)
            }
        }
    )

    const edges = data.elements.edges.filter(
        edge =>
        nodeIds.includes(edge.data.source) && nodeIds.includes(edge.data.target) &&
        settings.edgeTypes.has(edge.data.type)
    ).map(edge => {
        const updatedEdge = edge;
        updatedEdge.data.isSuper = false;
        return updatedEdge;
    });

    return {
        nodes: nodes,
        edges: edges
    };
}

/***
 * Obtains filter settings input by the user and updates the "filter" object.
 * Loads and removes relevant nodes and edges.
 * Collapses all modules.
 */
function applyFilter() {
    settings.minScore = parseFloat(document.getElementById("filter-min-score").value, 100);
    settings.path = document.getElementById("filter-path").value
    if (!settings.path) {
    settings.path = "sage.rings"
    }
    const checkboxes = document.querySelectorAll('#checkboxDropdown input[type=checkbox]');
    settings.edgeTypes = new Set(
    Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => parseInt(cb.value))
    );
    console.log(settings);

    return fetch("graph.json")
    .then(res => res.json())
    .then(data => {
    const filteredData = getFilteredElements(data, settings);
    const filteredNodeIds = filteredData.nodes.map(node => node.data.id)
    const fitleredEdgeIds = filteredData.edges.map(edge => edge.data.id)
    const newNodes = filteredData.nodes.filter(node => {
        const id = node.data.id;
        return cy.getElementById(id).empty();
    });
    const newEdges = filteredData.edges.filter(edge => {
        const id = edge.data.id;
        return cy.getElementById(id).empty();
    });

    cy.batch(() => {
        cy.add(
        {
            nodes: newNodes,
            edges: newEdges
        }
        );
        cy.edges().forEach(
        edge => {
            if (edge.data('isSuper')) {
            edge.remove();
            }
        }
        )

        // Handle filtered out nodes and edges
        cy.nodes().forEach(
        node => {
            if (!filteredNodeIds.includes(node.id())) {
            // Remove filtered out nodes
            node.remove();
            }
        }
        )
        cy.edges().forEach(
        edge => {
            if (!fitleredEdgeIds.includes(edge.id()) || 
                !filteredNodeIds.includes(edge.data('source') || 
                !filteredNodeIds.includes(edge.data('target')))) {
            // Remove filtered out edges
            edge.remove();
            }
        }
        )

        // Check if newNode is parent to any node who had their parent deferred
        newNodes.forEach(
        node => {
            if (deferredParentMap.has(node.data.id)) {
            const childNodeId = deferredParentMap.get(node.data.id);
            const childNode = cy.getElementById(childNodeId);
            if (childNode.nonempty()) {
                childNode.move({parent: node.data.id})
            }
            }
        }
        )
    });

    requestAnimationFrame(() => {
        const newNodes = cy.nodes().filter(n => n.visible());
        const nodeSet = cy.collection(newNodes);
        const edgeSet = nodeSet.connectedEdges();
        const toLayout = nodeSet.union(edgeSet);
        const layout = toLayout.layout({
        name: 'breadthfirst',
        directed: true,
        padding: 10
        });

        cy.once('layoutstop', () => {
        createSuperEdges();
        collapseAllModules();
        showVisibleEdges();
        });

        layout.run();
    });
    })
}

/***
 * Sets filter back to default settings
 * TODO - does not currently work
 */
function resetFilter() {
    settings.minScore = 100;
    settings.path = "sage.rings"
    settings.edgeTypes = new Set([0,1,2,3,4,5])
    applyFilter().then(() => {
        collapseAllModules();
    });
}

/***
 * Displays side panel with metadata information about the selected node
 */
function showSidePanel(label, type, score, fqname, urls ) {
    const panel = document.getElementById("side-panel");
    document.getElementById("panel-title").textContent = label || fqname;
    document.getElementById("panel-type").textContent = type || "unknown";
    document.getElementById("panel-score").textContent = score ?? "n/a";

    const docLink = document.getElementById("panel-doc");
    docLink.textContent = "Loading";
    if (urls)  {
    docLink.textContent = urls[0];
    docLink.href = urls[0];
    }
    else {
    docLink.textContent = "Could not find documentation.";
    docLink.removeAttribute("href");
    }

    panel.style.display = "block";
}

/***
 * Hides the side panel.
 */
function closePanel() {
    const panel = document.getElementById("side-panel");
    panel.style.display = "none";
}

function toggleDropdown() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('show');
}

function getSelectedModules() {
    const checkboxes = document.querySelectorAll('#checkboxDropdown input[type=checkbox]');
    return Array.from(checkboxes)
    .filter(cb => cb.checked)
    .map(cb => cb.value);
}

/***
 * Toggle modules and nodes on click.
 */
cy.on('tap', 'node', function(evt) {
    const node = evt.target;
    if (!node.isParent()) {
    console.log(node);
    console.log(node.data());
    showSidePanel(node.data('label'), node.data('type'), node.data('score'), node.id(), node.data('urls'));
    return;
    }

    const moduleId = node.id();
    if (collapsedModules.has(moduleId)) {
    expandModule(moduleId);
    } else {
    collapseModule(moduleId);
    }
});

/***
 * Initial fetch based on default filter settings. 
 * Loads and renders the nodes and edges in collapsed form.
 */
fetch("graph.json")
    .then(res => res.json())
    .then(data => {
    console.log("Data loaded")
    const filteredData = getFilteredElements(data, settings);

    cy.add(filteredData);

    const layout = cy.layout({
        name: 'breadthfirst',
        directed: true,
        padding: 10
    });

    cy.once('layoutstop', () => {
        createSuperEdges();
        collapseAllModules();
        showVisibleEdges();
        console.log("Modules collapsed.");
    });

    layout.run();

    console.log("cy initialized")
})