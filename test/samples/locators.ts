class locators {
    getTableData(rowIndex,columnIndex){
        return $(`table [id=\'table01\'tr:nth-child(${rowIndex}) td:nth-child(${columnIndex})`)
    }
}
export default new locators()