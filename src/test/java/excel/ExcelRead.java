package excel;

import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;

public class ExcelRead {
    public static void main(String[] args) throws Exception {

        File file = new File("src/TestData.xlsx");

        FileInputStream fileInputStream = new FileInputStream(file);

        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);

        XSSFSheet sheet = workbook.getSheet("Sheet1");
        sheet.getRow(2).getCell(1);

        int usedRows = sheet.getPhysicalNumberOfRows();
        int lastUsedRow = sheet.getLastRowNum();
    }
}
