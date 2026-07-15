const Exceljs=require('exceljs');
async function writeExcelFile(filepath,checkvalue,changevalue,change){
     const workbook=new Exceljs.Workbook();
    await workbook.xlsx.readFile(filepath);
    const worksheet=workbook.getWorksheet('Sheet1');
    const output= await readExcelFile(worksheet,checkvalue);
    const cell=worksheet.getCell(output.row,output.col+change);
    cell.value= changevalue;
    await workbook.xlsx.writeFile(filepath);
}
async function readExcelFile(worksheet,checkvalue) {
    let output= {row:-1,col:-1}
    worksheet.eachRow((row,rowNumber)=>{
    row.eachCell((cell,colnumber)=>{
       // console.log(cell.value);
       if(cell.value===checkvalue)
       {
        output.row=rowNumber;
        output.col=colnumber;
       }
    })
    })   
    return output;
}
//readExcelFile();
writeExcelFile('C:/Users/Elizabeth/Downloads/Obsqura Testing.xlsx', "Bradley Greer","New York",2);