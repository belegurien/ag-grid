// Type definitions for ag-grid v3.3.0-alpha.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import VHtmlElement from "../virtualDom/vHtmlElement";
import Column from "../entities/column";
import GridOptionsWrapper from "../gridOptionsWrapper";
import ExpressionService from "../expressionService";
import SelectionRendererFactory from "../selectionRendererFactory";
import RowRenderer from "./rowRenderer";
import SelectionController from "../selectionController";
import TemplateService from "../templateService";
import { ColumnController } from "../columnController/columnController";
import ValueService from "../valueService";
import EventService from "../eventService";
export default class RenderedCell {
    private vGridCell;
    private vSpanWithValue;
    private vCellWrapper;
    private vParentOfValue;
    private checkboxOnChangeListener;
    private column;
    private data;
    private node;
    private rowIndex;
    private colIndex;
    private editingCell;
    private scope;
    private firstRightPinnedColumn;
    private gridOptionsWrapper;
    private expressionService;
    private selectionRendererFactory;
    private rowRenderer;
    private selectionController;
    private $compile;
    private templateService;
    private cellRendererMap;
    private eCheckbox;
    private columnController;
    private valueService;
    private eventService;
    private value;
    private checkboxSelection;
    constructor(firstRightPinnedCol: boolean, column: any, $compile: any, rowRenderer: RowRenderer, gridOptionsWrapper: GridOptionsWrapper, expressionService: ExpressionService, selectionRendererFactory: SelectionRendererFactory, selectionController: SelectionController, templateService: TemplateService, cellRendererMap: {
        [key: string]: any;
    }, node: any, rowIndex: number, colIndex: number, scope: any, columnController: ColumnController, valueService: ValueService, eventService: EventService);
    calculateCheckboxSelection(): any;
    getColumn(): Column;
    private getValue();
    getVGridCell(): VHtmlElement;
    private getDataForRow();
    private setupComponents();
    startEditing(key?: number): void;
    focusCell(forceBrowserFocus: boolean): void;
    private stopEditing(eInput, blurListener, reset?);
    private createParams();
    private createEvent(event, eventSource);
    private addCellDoubleClickedHandler();
    private addCellContextMenuHandler();
    isCellEditable(): any;
    private addCellClickedHandler();
    private populateCell();
    private addStylesFromCollDef();
    private addClassesFromCollDef();
    private addClassesFromRules();
    private addCellNavigationHandler();
    private isKeycodeForStartEditing(key);
    createSelectionCheckbox(): void;
    setSelected(state: boolean): void;
    private createParentOfValue();
    isVolatile(): boolean;
    refreshCell(): void;
    private putDataIntoCell();
    private useCellRenderer(cellRenderer);
    private addClasses();
}
