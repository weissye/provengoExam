print("enter")

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# Set Chrome options to run in headless mode
chrome_options = Options()
# chrome_options.add_argument('--headless')  # Run in headless mode
# chrome_options.add_argument('--disable-gpu')  # Disable GPU acceleration (may be required on some systems)

# Replace the placeholders with your Gmail account credentials
username = "provengo6@gmail.com"
password = "qazXSW22"

# Launch the Chrome browser and navigate to Gmail

# driver = webdriver.Chrome(options=chrome_options)
driver = webdriver.Chrome()
driver.get("https://www.gmail.com")

# Enter the username and password and click on the Sign In button
driver.find_element("id", "identifierId").send_keys(username)
driver.find_element("id", "identifierNext").click()

WebDriverWait(driver, 20).until(EC.visibility_of_element_located((By.XPATH, '//input[@type="password"]')))
driver.find_element("xpath", '//input[@type="password"]').send_keys(password)
driver.find_element("id", "passwordNext").click()

# Wait for the Gmail inbox to load (you may need to adjust the XPath)
inbox_link = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.XPATH, '//a[contains(@aria-label, "Inbox")]')))
inbox_link.click()

aria_label = inbox_link.get_attribute('aria-label')

# Check if there are emails in the Inbox
if aria_label != "Inbox":
    check_button = driver.find_element(By.XPATH, '//span[@role="checkbox"]')
    check_button.click()

    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, '//*[@aria-label="Delete"]')))
    driver.find_element(By.XPATH, '//*[@aria-label="Delete"]').click()
    WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.XPATH, '//*[text()="Your Primary tab is empty."]')))
    time.sleep(1)
else:
    print("No emails in the Inbox")

# Close the browser
driver.close()


