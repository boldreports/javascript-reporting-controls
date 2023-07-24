var fs = require('fs');
const VIEWER_WIDGETS = ['common/ej.core','common/ej.data','common/ej.touch','common/ej.draggable','common/ej.scroller','common/ej.globalize'];
const DESIGNER_WIDGETS = ['web/ej.autocomplete','web/ej.combobox','web/ej.daterangepicker','web/ej.listview','web/ej.listbox','web/ej.menu','web/ej.pager','web/ej.slider','web/ej.splitbutton','web/ej.tab','web/ej.uploadbox','web/ej.colorpicker','web/ej.excelfilter'];
const EJ1_WIDGETS_ROOT = `syncfusion-javascript/Scripts/ej/`;

async function updateViewerScript(){
    var viewerContent = fs.readFileSync('./Scripts/bold.report-viewer.min.js','utf8');
    var viewerDependentComponents = '';
    for(let i = 0; i < VIEWER_WIDGETS.length; i++){
        viewerDependentComponents = (i == VIEWER_WIDGETS.length-1) ? viewerDependentComponents + `"${EJ1_WIDGETS_ROOT}${VIEWER_WIDGETS[i]}.min"` : viewerDependentComponents + `"${EJ1_WIDGETS_ROOT}${VIEWER_WIDGETS[i]}.min",`
    }
    viewerContent = viewerContent.replace(/"\.\/common\/bold\.reports\.widgets\.min"/g,viewerDependentComponents);
    await fs.writeFileSync('./Scripts/bold.report-viewer.min.js', viewerContent);
}

async function updateDesignerScript(){
    var designerContent = fs.readFileSync('./Scripts/bold.report-designer.min.js','utf8');
    var designerDependentComponents = '';
    for(let i = 0; i < DESIGNER_WIDGETS.length; i++){
        designerDependentComponents = (i == DESIGNER_WIDGETS.length-1) ? designerDependentComponents + `"${EJ1_WIDGETS_ROOT}${DESIGNER_WIDGETS[i]}.min"` : designerDependentComponents + `"${EJ1_WIDGETS_ROOT}${DESIGNER_WIDGETS[i]}.min",`
    }
    designerContent = designerContent.replace(/"\.\/common\/bold\.report-designer-widgets\.min"/g,designerDependentComponents);
    await fs.writeFileSync('./Scripts/bold.report-designer.min.js', designerContent);
}

updateViewerScript();
updateDesignerScript();