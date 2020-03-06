package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class TeachersPage {

    public TeachersPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//h5[.='Teachers']")
    public WebElement headerOfTeacherPage;

    @FindBy(xpath = "(//div[@class='row staff-grid-row']//div//div//div[2][1])[1]")
    public WebElement threeDotsButton;

    @FindBy(xpath = "//div[@class='dropdown-menu dropdown-menu-right show']//a[1]")
    public WebElement editButton;


    @FindBy(xpath = "(//div[@class='row staff-grid-row']//div//div//h4//a)[1]")
    public WebElement firstTeacher;









}
