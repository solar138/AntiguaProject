export default async function FlightPrice() {
    var now = new Date();
    var todayDate = now.getFullYear() + "-" + (now.getMonth()+1+"").padStart(2, "0") + "-" + (now.getDate());
    now.setMonth(now.getMonth() + 1)
    var nextMonthDate = now.getFullYear() + "-" + (now.getMonth()+1+"").padStart(2, "0") + "-" + (now.getDate());
    var source = "SEA"; 
    var dest = "ANU";
    try {
        var prices : number[] = JSON.parse(JSON.parse((await (await fetch("https://www.google.com/_/TravelFrontendUi/data/travel.frontend.flights.FlightsFrontendService/GetCalendarPicker?f.sid=4091161827211086434&bl=boq_travel-frontend-ui_20240529.02_p0&hl=en&soc-app=162&soc-platform=1&soc-device=1&_reqid=229849&rt=c", {
            "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.9,fr;q=0.8,ru;q=0.7",
            "cache-control": "no-cache",
            "content-type": "application/x-www-form-urlencoded;charset=UTF-8",
            "pragma": "no-cache",
            "priority": "u=1, i",
            "sec-ch-ua": "\"Google Chrome\";v=\"125\", \"Chromium\";v=\"125\", \"Not.A/Brand\";v=\"24\"",
            "x-same-domain": "1"
            },
            "referrer": "https://www.google.com/travel/flights?tfs=CBwQARoJcgcIARIDQU5VGglqBwgBEgNBTlVAAUgBcAGCAQsI____________AZgBAQ&tfu=KgIIAw",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": "f.req=" + encodeURI(JSON.stringify([null,JSON.stringify([null,[null,null,1,null,[],1,[1,0,0,0],null,null,null,null,null,null,[[[[[source,0]]],[[[dest,0]]],null,0],[[[[dest,0]]],[[[source,0]]],null,0]],null,null,null,1],[todayDate, nextMonthDate],null,[7,7]]
            )])) + "&at=AAuQa1q3AG5zCXuo18SUbrpkddNr%3A1717082244131&",
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        })).text()).split("\n")[3])[0][2])[1].map((a : any[][][]) => a[2][0][1]);

        prices.sort((a, b) => a - b);

        var price = prices.reduce((acc:number, cur:number) => acc + cur, 0) / prices.length;
        
        return <span>Flights from {source} to {dest} typically range between ${prices[0]}-${prices[prices.length - 1]} with an average of ${Math.round(price)}.</span>
    } catch (err) {
        console.log(err);
        console.log(source, dest, todayDate, nextMonthDate);
        return <span>Flight prices from {source} to {dest} are unavailable. (API Error)</span>
    }
}