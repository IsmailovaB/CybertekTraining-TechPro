package excel;

import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.IOException;

public class Excel {
    static String path="src/TestData.xlsx";
    static String sheetName = "Sheet1";
    public static String getName(int row, int cel) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(path);
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheet(sheetName);
        XSSFCell cell = sheet.getRow(row).getCell(cel);
        return cell.toString();
    }
    public static String getDescription(int cellNum) throws IOException {
        FileInputStream fileInputStream = new FileInputStream(path);
        XSSFWorkbook workbook = new XSSFWorkbook(fileInputStream);
        XSSFSheet sheet = workbook.getSheet(sheetName);
        XSSFCell cell = sheet.getRow(1).getCell(cellNum);
        return cell.toString();
    }
}
