const aqi_std = {
    "Good":50,
    "Moderate":100,
    "Unhealthy for Sensitive Groups": 150,
    "Unhealthy": 200,
    "Very Unhealthy": 300,
    "Hazardous": 500
}

//messages taken from epa.gov
const messages = {
    "Carbon monoxide" : "CO is a colorless, odorless gas that can be harmful when inhaled in large amounts. CO is released when something is burned. The greatest sources of CO to outdoor air are cars, trucks and other vehicles or machinery that burn fossil fuels. A variety of items in your home such as unvented kerosene and gas space heaters, leaking chimneys and furnaces, and gas stoves also release CO and can affect air quality indoors.",
    "Sulfur dioxide" : "The largest source of SO2 in the atmosphere is the burning of fossil fuels by power plants and other industrial facilities. Smaller sources of SO2 emissions include: industrial processes such as extracting metal from ore; natural sources such as volcanoes; and locomotives, ships and other vehicles and heavy equipment that burn fuel with a high sulfur content.",
    "Ozone" : "Tropospheric, or ground level ozone, is not emitted directly into the air, but is created by chemical reactions between oxides of nitrogen (NOx) and volatile organic compounds (VOC). This happens when pollutants emitted by cars, power plants, industrial boilers, refineries, chemical plants, and other sources chemically react in the presence of sunlight.",
    "Nitrogen dioxide (NO2)" : "Nitrogen Dioxide (NO2) is one of a group of highly reactive gases known as oxides of nitrogen or nitrogen oxides (NOx). Other nitrogen oxides include nitrous acid and nitric acid. NO2 is used as the indicator for the larger group of nitrogen oxides. NO2 primarily gets in the air from the burning of fuel. NO2 forms from emissions from cars, trucks and buses, power plants, and off-road equipment."
}