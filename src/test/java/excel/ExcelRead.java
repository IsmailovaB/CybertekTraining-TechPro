package excel;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import pages.AddingTeacher_Page;

import java.io.File;
import java.io.FileInputStream;

public class ExcelRead {

    AddingTeacher_Page addingTeacher_page = new AddingTeacher_Page();

    public void excelRead() throws Exception {

        File file = new File("src/TestData.xlsx");

        FileInputStream fileInputStream = new FileInputStream(file);

        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);

        XSSFSheet sheet = workbook.getSheet("Sheet1");


        int usedRows = sheet.getPhysicalNumberOfRows();
        int lastUsedRow = sheet.getLastRowNum();

        for (int i = 2; i < lastUsedRow; i++) {

            for (int j = 0; j<12; j++) {

                addingTeacher_page.getList().get(j).sendKeys(sheet.getRow(i).getCell(j).toString());
            }
        }



    }
}
