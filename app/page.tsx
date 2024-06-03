import HeaderRow from "@/components/HeaderRow";
import SimpleButton from "@/components/SimpleButton";
import Citation from "@/components/Citation";
import Image from "next/image";
import LongBeach from "@/public/Images/Sandals-Grande-Antigua-Long-Beach.jpg";
import IntlAirport from "@/public/Images/V.C._Bird_International_Airport.png";
import Coastline from "@/public/Images/Antigua-Coastline.jpg";
import FlightPrice from "@/components/FlightPrice";
import Disclaimer from "@/components/Disclaimer";

export default function Home() {
  var date = new Date();
  return (
    <div style={{margin: 0}}>
      <header>
        <h1 className="center">Antigua & Barbuda Travel Guide</h1>
        <HeaderRow/>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{maxWidth: 600, margin: "auto"}}>
        <Disclaimer referrer="instructure"><p>Disclaimer: This is a school project and may not reflect the actual situation in Antigua and Barbuda.</p></Disclaimer>
        <p><Citation source="Click again to hide citation. Note the arrow on the left side.">Cited text is italicized like this. Click to show source.</Citation></p>
        <p>Travel to Antigua today! See the breathtaking shorelines and beaches of the Antigua & Barbuda Islands! Experience the luxury of our resort at <Citation source="Fictional location.">East Osbourn Hotel!</Citation></p>
        <Image className="photo" alt="Photo of Sandals Grande Long Beach in Antigua." src={LongBeach}/>
        <p className="center">One of the many beaches of Antigua.</p>
        <h2>Arriving at Antigua</h2>
        <HeaderRow/>
        <p><Citation source="Source: A Small Place (Kincaid 3)">You will
land at the <a href="https://www.google.com/travel/flights?tfs=CBwQARoJcgcIARIDQU5VGglqBwgBEgNBTlVAAUgBcAGCAQsI____________AZgBAQ&tfu=KgIIAw">V.C. Bird International Airport. (ANU)</a></Citation> It is on the smaller side of international airports, however the staff are well accomodating to newly arriving travelers. Be sure to visit the <a href="https://www.google.com/maps/place/data=!3m1!4b1!4m6!3m5!1s0x8c1297a7cbb3c489:0xd4da2e03bf2c0dea!8m2!3d17.1413818!4d-61.7910549!16s%2Fg%2F11fqxkq8hr?entry=ttu">Big Banana Restaurant</a> right in the airport! <Citation source={"Source: Live updates from Google Flights API. Assuming a 7 day round-trip and departure dates from " + (date.toDateString()) + " to " + ([date.setMonth(new Date().getMonth() + 1), date.toDateString()][1])}><FlightPrice/></Citation></p>
        <div className="center"><SimpleButton href="https://www.google.com/travel/flights?tfs=CBwQARoJcgcIARIDQU5VGglqBwgBEgNBTlVAAUgBcAGCAQsI____________AZgBAQ&tfu=KgIIAw" className="auto-margin">Flights to ANU</SimpleButton></div>
        <br/>
        <Image className="photo" alt="Photo of V.C. Bird International Airport in Antigua." src={IntlAirport}/>
        <p className="center">The main entrance of V.C. Bird International Airport.</p>
        <p></p>
        <h2>Arrival Day Activities</h2>
        <HeaderRow/>
        <p>Renting a car is highly optional for an island the size of Antigua. Avis, Hertz, and Drive-A-Matic are all nearby if you find yourself needing a car. <Citation source="Source: A Small Place (Kincaid 5)">Taxis are abundant and pay in U.S. currency. Always ask for the formal sheet that lists official prices and destinations.</Citation></p>
        <Image className="photo" alt="Photo of buildings on the coastline of Antigua." src={Coastline}/>
        <p className="center">The magnificent resort region around East Osbourn Hotel.</p>
      </main>
      <footer>
        <p className="center">Made by Ryan Lin using Next.js. All interactive elements were made with CSS only!</p>
        <div className="center"><SimpleButton href="https://github.com/solar138/AntiguaProject" className="auto-margin">Source on GitHub</SimpleButton></div>
      </footer>    
  </div>
  );
}
