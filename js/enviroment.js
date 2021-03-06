

//============================ < NEW BUTTONS > =============================//

function changeButton(buttonClicked) {  
    pr("\tin changeNewButtons");
    fullurl = returnBaseUrl()+"img/trans/";
    hasbeenclicked=false;
    if(buttonClicked=="graph_meso.png"){
        document.getElementById("switch").src=fullurl+"graph_meso.png";
        document.getElementById("viewType").src=fullurl+"status_macro_view.png";
        hasbeenclicked=true;
    }
    if(buttonClicked=="graph_macro.png" && hasbeenclicked==false){
        document.getElementById("switch").src=fullurl+"graph_macro.png";
        document.getElementById("viewType").src=fullurl+"status_meso_view.png";
    }
    
    if(buttonClicked=="active_scholars.png"){
        document.getElementById("socio").src=fullurl+"active_scholars.png";
        document.getElementById("semantic").src=fullurl+"inactive_tags.png";
        document.getElementById("sociosemantic").src=fullurl+"inactive_sociosem.png";
        pushSWClick("social"); 
        pr("swclickPrev: "+swclickPrev+" - swclickActual: "+swclickActual);
        $("#category-A").show();
        $("#category-B").hide();
    }  
    if(buttonClicked=="active_tags.png"){
        document.getElementById("socio").src=fullurl+"inactive_scholars.png";
        document.getElementById("semantic").src=fullurl+"active_tags.png";
        document.getElementById("sociosemantic").src=fullurl+"inactive_sociosem.png";
        pushSWClick("semantic"); 
        pr("swclickPrev: "+swclickPrev+" - swclickActual: "+swclickActual);     
        $("#category-A").hide();
        $("#category-B").show();
    }
    if(buttonClicked=="active_sociosem.png"){
        document.getElementById("socio").src=fullurl+"inactive_scholars.png";
        document.getElementById("semantic").src=fullurl+"inactive_tags.png";
        document.getElementById("sociosemantic").src=fullurl+"active_sociosem.png";
        pushSWClick("sociosemantic");
        pr("swclickPrev: "+swclickPrev+" - swclickActual: "+swclickActual);
        $("#category-A").show();
        $("#category-B").show();
    }
    if(buttonClicked=="selectNode"){        
        if(categories.length==2) $("#switchbutton").show();
        if(document.getElementById("switch").src==fullurl+"graph_meso_null.png"){
            if(document.getElementById("viewType").src==fullurl+"status_macro_view.png"){
                document.getElementById("switch").src=fullurl+"graph_meso.png";
            }
            if(document.getElementById("viewType").src==fullurl+"status_meso_view.png"){
                document.getElementById("switch").src=fullurl+"graph_macro.png";
            }
        }
    }
    if(buttonClicked=="unselectNodes"){
        document.getElementById("switch").src=fullurl+"graph_meso_null.png";
    }
    /*tofix*/
//    if(is_empty(selections)){        
//        /***** The animation *****/
//        _cG = $("#leftcolumn");    
//        _cG.animate({
//            "left" : "-" + _cG.width() + "px"
//        }, function() {
//            $("#aUnfold").attr("class","rightarrow");
//            $("#zonecentre").css({
//                left: "0"
//            });
//        });
//    }
}

function changeInactvHover(imgClicked) { 
    fullurl = returnBaseUrl()+"img/trans/";
    if(imgClicked.id=="socio") {
        if ( imgClicked.src==fullurl+"inactive_scholar.png" ) {
            imgClicked.src=fullurl+"hover_scholar.png"
        }
        if ( imgClicked.src==fullurl+"inactive_scholars.png" ) {
            imgClicked.src=fullurl+"hover_scholars.png"
        }
    }
    if(imgClicked.id=="semantic") {
        if ( imgClicked.src==fullurl+"inactive_tag.png" ) {
            imgClicked.src=fullurl+"hover_tag.png"
        }
        if ( imgClicked.src==fullurl+"inactive_tags.png" ) {
            imgClicked.src=fullurl+"hover_tags.png"
        }        
    }
    if(imgClicked.id=="sociosemantic") {
        if ( imgClicked.src==fullurl+"inactive_sociosem.png" ) {
            imgClicked.src=fullurl+"hover_sociosem.png"
        }     
    }
}

function changeHoverInactv(imgClicked) {  
    fullurl = returnBaseUrl()+"img/trans/";
    if(imgClicked.id=="socio") {
        if ( imgClicked.src==fullurl+"hover_scholar.png" ) {
            imgClicked.src=fullurl+"inactive_scholar.png"
        }
        if ( imgClicked.src==fullurl+"hover_scholars.png" ) {
            imgClicked.src=fullurl+"inactive_scholars.png"
        }        
    }
    if(imgClicked.id=="semantic") {
        if ( imgClicked.src==fullurl+"hover_tag.png" ) {
            imgClicked.src=fullurl+"inactive_tag.png"
        }
        if ( imgClicked.src==fullurl+"hover_tags.png" ) {
            imgClicked.src=fullurl+"inactive_tags.png"
        }
    }
    
    if(imgClicked.id=="sociosemantic") {
        if ( imgClicked.src==fullurl+"hover_sociosem.png" ) {
            imgClicked.src=fullurl+"inactive_sociosem.png"
        }    
    }
}

function changeHoverActive(img) {
    fullurl = returnBaseUrl()+"img/trans/";
    if(img.id=="socio") {
        if ( img.src==fullurl+"hover_scholars.png" ) {
            changeButton("active_scholars.png");
            if(document.getElementById("viewType").src==fullurl+"status_macro_view.png"){
                changeToMacro("social");
            }
            if(document.getElementById("viewType").src==fullurl+"status_meso_view.png"){
                changeToMeso("social");
            }
        }
    }
    
    if(img.id=="semantic") { 
        if ( img.src==fullurl+"hover_tags.png" ) { 
            changeButton("active_tags.png");
            if(document.getElementById("viewType").src==fullurl+"status_macro_view.png"){
                changeToMacro("semantic");
            }
            if(document.getElementById("viewType").src==fullurl+"status_meso_view.png"){
                changeToMeso("semantic");
            }
        }
    }
    
    if(img.id=="sociosemantic") { 
        if ( img.src==fullurl+"hover_sociosem.png" ) { 
            changeButton("active_sociosem.png");
            if(document.getElementById("viewType").src==fullurl+"status_macro_view.png"){
                changeToMacro("sociosemantic");
            }
            if(document.getElementById("viewType").src==fullurl+"status_meso_view.png"){
                changeToMeso("sociosemantic");
            }
        }
        
    }
    if(img.id=="switch") { 
        hasbeenclicked=false;
        if ( img.src==fullurl+"graph_meso.png"){
            changeButton("graph_macro.png");   
            pushSWClick(swclickActual);
            changeToMeso(swclickActual);
            hasbeenclicked=true;       
        }
        if ( img.src==fullurl+"graph_macro.png" && hasbeenclicked==false){
            changeButton("graph_meso.png");    
            pushSWClick(swclickActual);
            changeToMacro(swclickActual);
        }
    }
}


function neweffectshow(){
    if(!is_empty(selections)){    
        $("#labelchange").show();
        $("#availableView").show();  
    }
}

function neweffecthide(){
    $.doTimeout(300,function (){
        if($("#labelchange")[0].hidden==false){
            
        }
        else {
            $("#labelchange").hide();
            $("#availableView").hide(); 
        }
    });
}

function justhide(){    
    $("#labelchange").hide();
    $("#availableView").hide();  
}

//============================= </ NEW BUTTONS > =============================//







//=========================== < FILTERS-SLIDERS > ===========================//

function updateEdgeFilter(edgeFilterName) {
    pr("Updating filter_ "+edgeFilterName);
    thing="";
    if(edgeFilterName=="social") {
        edgeFilterName="#sliderAEdgeWeight";
        minvalue="#nodeAFilterMinValue";
        maxvalue="#nodeAFilterMaxValue";
        thing="nodes1";
    }
    if(edgeFilterName=="semantic") {
        minvalue="#nodeBFilterMinValue";
        maxvalue="#nodeBFilterMaxValue";
        edgeFilterName="#sliderBEdgeWeight";
        thing="nodes2";
    }
    edges=partialGraph._core.graph.edges.filter(function(e) {
                    return !e['hidden'];
          });
          
//    pr("\tpartialGraph._core.graph.edges: "+partialGraph._core.graph.edges.length);
//    pr(partialGraph._core.graph.edges); //#edges=936
//    pr("\tpartialGraph._core.graph.edges.filter(function(x){return !x['hidden']});: "+edges.length);
//    pr(edges);                          //#edges=936
    
    
    
    edgesByWeight=[];
    for(var i in edges){
        if(edges[i].hidden==false){
            if(edges[i].label==thing){
                if(typeof(edgesByWeight[edges[i].weight])=="undefined"){
                    edgesByWeight[edges[i].weight]=[];
                }
                edgesByWeight[edges[i].weight].push(edges[i].id);
            }
        }
    }
//    pr("\tedgesByWeight: ");
//    pr(edgesByWeight);
    edgesSortedByWeight = ArraySortByKey(edgesByWeight, function(a,b){
        return a-b
    });
    
//    pr("\tedgesSortedByWeight: ");
//    pr(edgesSortedByWeight);
    
    normEdges=[];
    cont=0;
    index=0;
    nbCuts=Math.floor(edges.length/10);
    for(var i in edgesSortedByWeight){
        for(var j in edgesSortedByWeight[i].value){
            if(typeof(normEdges[index])=="undefined"){
                normEdges[index]=[];
            }
            normEdges[index].push(edgesSortedByWeight[i].value[j])
            cont++;
            if(cont%nbCuts==0) {
                index++;
                cont=0;
            }
        }
    }
    
//    pr("\tnormEdges: ");
//    pr(normEdges);
    
    $(edgeFilterName).slider({
        range: true,
        min: 0,
        max: normEdges.length-1,
        values: [0, normEdges.length-1],
        step: 1,
        animate: true,
        slide: function(event, ui) {
            $.doTimeout(300,function (){
                //console.log("Rango Pesos Arista: "+ui.values[ 0 ]+" , "+ui.values[ 1 ]);
                edgesTemp = partialGraph._core.graph.edgesIndex;
                for(i=0;i<normEdges.length;i++){
                    if(i>=ui.values[0] && i<=ui.values[1]){
                        //$(minvalue).text(ui.values[ 0 ]);
                        //$(maxvalue).text(ui.values[ 1 ]);
                        //console.log("Rango Pesos Arista: "+ui.values[ 0 ]+" , "+ui.values[ 1 ]);
                        for (var j in normEdges[i]){
                            id=normEdges[i][j];
                            //pr("unHideElem("+id+");");
//                            if(typeof(edgesTemp[id])=="undefined"){
//                                //source=Edges[id].sourceID;
//                                //target=Edges[id].targetID;
//                                //edge=Edges[id];
//                                pr("unHideElem("+id+");")
                            unHideElem(id);
//                                //partialGraph.addEdge(id,source,target,edge);
//                            }
                        }
                    }
                    else {
                        for (var j in normEdges[i]){
                            hideElem(normEdges[i][j]);
                        }
                        //partialGraph.dropEdge(normEdges[i]);
                    }
                }
                pr("==========================================")
                partialGraph.draw();
            });
        }
    });
}

function updateBothEdgeFilters() {
    edges=partialGraph._core.graph.edges.filter(function(e) {
                    return !e['hidden'];
          });;
    scholarsEdgesByWeight=[];
    keywordsEdgesByWeight=[];
    
    for(var i in edges){
        if(edges[i].label=="nodes1"){
            if(typeof(scholarsEdgesByWeight[edges[i].weight])=="undefined"){
                scholarsEdgesByWeight[edges[i].weight]=[];
            }
            scholarsEdgesByWeight[edges[i].weight].push(edges[i].id);
        }
        if(edges[i].label=="nodes2"){
            if(typeof(keywordsEdgesByWeight[edges[i].weight])=="undefined"){
                keywordsEdgesByWeight[edges[i].weight]=[];
            }
            keywordsEdgesByWeight[edges[i].weight].push(edges[i].id);            
        }
    }
    scholarsEdgesSortedByWeight = ArraySortByKey(scholarsEdgesByWeight, function(a,b){
        return a-b
    });
    
    keywordsEdgesSortedByWeight = ArraySortByKey(keywordsEdgesByWeight, function(a,b){
        return a-b
    });
//    
//    normScholarEdges=[];
//    cont=0;
//    index=0;
//    for(var i in scholarsEdgesSortedByWeight){
//        for(var j in scholarsEdgesSortedByWeight[i].value){
//            if(typeof(normScholarEdges[index])=="undefined"){
//                normScholarEdges[index]=[];
//            }
//            normScholarEdges[index].push(scholarsEdgesSortedByWeight[i].value[j])
//            cont++;
//            if(cont%20==0) {
//                index++;
//                cont=0;
//            }
//        }
//    }
//    pr(normScholarEdges);
    
    $("#sliderAEdgeWeight").slider({
        range: true,
        min: 0,
        max: scholarsEdgesSortedByWeight.length-1,
        values: [0, scholarsEdgesSortedByWeight.length-1],
        step: 1,
        animate: true,
        slide: function(event, ui) {
            $.doTimeout(300,function (){
                //console.log("Rango Pesos Arista: "+ui.values[ 0 ]+" , "+ui.values[ 1 ]);
                edgesTemp = partialGraph._core.graph.edgesIndex;
                for(i=0;i<scholarsEdgesSortedByWeight.length;i++){
                    if(i>=ui.values[0] && i<=ui.values[1]){
                        for (var j in scholarsEdgesSortedByWeight[i].value){
                            id=scholarsEdgesSortedByWeight[i].value[j];
                            unHideElem(id);
//                            if(typeof(edgesTemp[id])=="undefined"){
//                                source=Edges[id].sourceID;
//                                target=Edges[id].targetID;
//                                edge=Edges[id];
//                                //partialGraph.addEdge(id,source,target,edge);
//                            }
                        }
                    }
                    else {
                        for(var j in scholarsEdgesSortedByWeight[i].value){
                            hideElem(scholarsEdgesSortedByWeight[i].value[j])
                        }
                    }
                }
                partialGraph.draw();
            });
        }
    });
    
    $("#sliderBEdgeWeight").slider({
        range: true,
        min: 0,
        max: keywordsEdgesSortedByWeight.length-1,
        values: [0, keywordsEdgesSortedByWeight.length-1],
        step: 1,
        animate: true,
        slide: function(event, ui) {
            $.doTimeout(300,function (){
                //console.log("Rango Pesos Arista: "+ui.values[ 0 ]+" , "+ui.values[ 1 ]);
                edgesTemp = partialGraph._core.graph.edgesIndex;
                for(i=0;i<keywordsEdgesSortedByWeight.length;i++){
                    if(i>=ui.values[0] && i<=ui.values[1]){
                        for (var j in keywordsEdgesSortedByWeight[i].value){
                            id=keywordsEdgesSortedByWeight[i].value[j];
                            unHideElem(id);
//                            if(typeof(edgesTemp[id])=="undefined"){
//                                source=Edges[id].sourceID;
//                                target=Edges[id].targetID;
//                                edge=Edges[id];
//                                //partialGraph.addEdge(id,source,target,edge);
//                            }
                        }
                    }
                    else {
                        for(var j in keywordsEdgesSortedByWeight[i].value){
                            hideElem(keywordsEdgesSortedByWeight[i].value[j])
                        }
                        //partialGraph.dropEdge(keywordsEdgesSortedByWeight[i].value);
                    }
                }
                partialGraph.draw();
            });
        }
    });
}

function updateNodeFilter(nodeFilterName) {
        
    scholarsNodesBySize=[];
    keywordsNodesBySize=[];
    nodesSortedBySize=[];
    
    nodeType="";
    divName="";
    if(nodeFilterName=="social"){
        nodeType=catSoc;
        divName="#sliderANodeWeight";
    }
    else {
        nodeType=catSem;
        divName="#sliderBNodeWeight";
    }
    nodes=partialGraph._core.graph.nodes.filter(function(n) {
                    return !n['hidden'];
          });
    nodesBySize=[];
    for(var i in nodes){
        if(Nodes[nodes[i].id].type==catSoc){
            if(typeof(nodesBySize[nodes[i].degree])=="undefined"){
                nodesBySize[nodes[i].degree]=[];
            }
            nodesBySize[nodes[i].degree].push(nodes[i].id);
        }
        if(Nodes[nodes[i].id].type==catSem){
            if(typeof(nodesBySize[nodes[i].size])=="undefined"){
                nodesBySize[nodes[i].size]=[];
            }
            nodesBySize[nodes[i].size].push(nodes[i].id);
        }
    }
    nodesSortedBySize = ArraySortByKey(nodesBySize, function(a,b){
        return a-b
    });
    if(nodeFilterName=="social"){
        return null;
    }
    $(divName).slider({
        range: true,
        min: 0,
        max: nodesSortedBySize.length-1,
        values: [0, nodesSortedBySize.length-1],
        step: 1,
        animate: true,
        slide: function(event, ui) {
            $.doTimeout(300,function (){
                //console.log("Rango Pesos Arista: "+ui.values[ 0 ]+" , "+ui.values[ 1 ]);
                nodesTemp = partialGraph._core.graph.nodesIndex;
                for(i=0;i<nodesSortedBySize.length;i++){
                    if(i>=ui.values[0] && i<=ui.values[1]){
                        for (var j in nodesSortedBySize[i].value){
                            id=nodesSortedBySize[i].value[j];
                            nodesTemp[id].hidden=false;
                        }
                    }
                    else {
                        for (var j in nodesSortedBySize[i].value){
                            id=nodesSortedBySize[i].value[j];
                            nodesTemp[id].hidden=true;
                        }
                    }
                }
                partialGraph.draw();
            });
        }
    });
}

function updateBothNodeFilters() {
    nodes=partialGraph._core.graph.nodes.filter(function(n) {
                    return !n['hidden'];
          });
    scholarsNodesBySize=[];
    keywordsNodesBySize=[];
    nodesSortedBySize=[];
    
    for(var i in nodes){
        if(Nodes[nodes[i].id].type==catSoc){
            if(typeof(scholarsNodesBySize[nodes[i].degree])=="undefined"){
                scholarsNodesBySize[nodes[i].degree]=[];
            }
            scholarsNodesBySize[nodes[i].degree].push(nodes[i].id);
        }
        if(Nodes[nodes[i].id].type==catSem){
            if(typeof(keywordsNodesBySize[nodes[i].size])=="undefined"){
                keywordsNodesBySize[nodes[i].size]=[];
            }
            keywordsNodesBySize[nodes[i].size].push(nodes[i].id);
        }
    }
    scholarsSortedBySize = ArraySortByKey(scholarsNodesBySize, function(a,b){
        return a-b
    });    
    keywordsSortedBySize = ArraySortByKey(keywordsNodesBySize, function(a,b){
        return a-b
    });
    
//    $("#sliderANodeWeight").slider({
//        range: true,
//        min: 0,
//        max: scholarsSortedBySize.length-1,
//        values: [0, scholarsSortedBySize.length-1],
//        step: 1,
//        animate: true,
//        slide: function(event, ui) {
//            $.doTimeout(300,function (){
//                //console.log("Rango Pesos Arista: "+ui.values[ 0 ]+" , "+ui.values[ 1 ]);
//                nodesTemp = partialGraph._core.graph.nodesIndex;
//                for(i=0;i<scholarsSortedBySize.length;i++){
//                    if(i>=ui.values[0] && i<=ui.values[1]){
//                        for (var j in scholarsSortedBySize[i].value){
//                            id=scholarsSortedBySize[i].value[j];
//                            nodesTemp[id].hidden=false;
//                        }
//                    }
//                    else {
//                        for (var j in scholarsSortedBySize[i].value){
//                            id=scholarsSortedBySize[i].value[j];
//                            nodesTemp[id].hidden=true;
//                        }
//                    }
//                }
//                partialGraph.draw();
//            });
//        }
//    });
    $("#sliderBNodeWeight").slider({
        range: true,
        min: 0,
        max: keywordsSortedBySize.length-1,
        values: [0, keywordsSortedBySize.length-1],
        step: 1,
        animate: true,
        slide: function(event, ui) {
            $.doTimeout(300,function (){
                //console.log("Rango Pesos Arista: "+ui.values[ 0 ]+" , "+ui.values[ 1 ]);
                nodesTemp = partialGraph._core.graph.nodesIndex;
                for(i=0;i<keywordsSortedBySize.length;i++){
                    if(i>=ui.values[0] && i<=ui.values[1]){
                        for (var j in keywordsSortedBySize[i].value){
                            id=keywordsSortedBySize[i].value[j];
                            nodesTemp[id].hidden=false;
                        }
                    }
                    else {
                        for (var j in keywordsSortedBySize[i].value){
                            id=keywordsSortedBySize[i].value[j];
                            nodesTemp[id].hidden=true;
                        }
                    }
                }
                partialGraph.draw();
            });
        }
    });
}

//=========================== </ FILTERS-SLIDERS > ===========================//










//============================= < SEARCH > =============================//
function updateSearchLabels(id,name,type){    
    labels.push({
        'id' : id,
        'label' : name, 
        'desc': type
    });
}

function extractContext(string, context) {
    var matched = string.toLowerCase().indexOf(context.toLowerCase());

    if (matched == -1) 
        return string.slice(0, 20) + '...';

    var begin_pts = '...', end_pts = '...';

    if (matched - 20 > 0) {
        var begin = matched - 20;
    } else {
        var begin = 0;
        begin_pts = '';
    }

    if (matched + context.length + 20 < string.length) {
        var end = matched + context.length + 20;
    } else {
        var end = string.length;
        end_pts = '';
    }

    str = string.slice(begin, end);

    if (str.indexOf(" ") != Math.max(str.lastIndexOf(" "), str.lastIndexOf(".")))
        str = str.slice(str.indexOf(" "), Math.max(str.lastIndexOf(" "), str.lastIndexOf(".")));

    return begin_pts + str + end_pts;
}

function searchLabel(string){    
    var id_node = '';
    var n;
    
    nds = partialGraph._core.graph.nodes.filter(function(x){return !x["hidden"]});
    for(var i in nds){
        n = nds[i]
            if (n.label == string) {
                return n;
            }
    }
}

function search(string) {
    var id_node = '';
    partialGraph.iterNodes(function (n) {
        if(n.hidden==false){
            if (n.label == string) {
                id_node = n.id;
                return n;
            }  
        }
    });
    getOpossitesNodes(id_node, false);
    
    if(categoriesIndex.length==1) updateLeftPanel_uni();
    if(categoriesIndex.length==2) updateLeftPanel(); 
    
      
                if(is_empty(selections)==true){  
                    $("#names").html("");
                    $("#opossiteNodes").html("");
                    $("#information").html("");
                    changeButton("unselectNodes");
                }
                else {
                    greyEverything();
                    overNodes=true;
                    for(var i in selections){
                        markAsSelected(i,true);
                    }
                    changeButton("selectNode");
                    partialGraph.draw();
                }
                $("input#searchinput").val("");
                $("input#searchinput").autocomplete( "close" );
}

//============================ < / SEARCH > ============================//