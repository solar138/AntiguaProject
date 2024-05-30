import HeaderRow from "@/components/HeaderRow";
import SimpleButton from "@/components/SimpleButton";
import Citation from "@/components/Citation";
import Image from "next/image";
import LongBeach from "@/public/Images/Sandals-Grande-Antigua-Long-Beach.jpg";
import IntlAirport from "@/public/Images/V.C._Bird_International_Airport.png";
import Coastline from "@/public/Images/Antigua-Coastline.jpg";
import FlightPrice from "@/components/FlightPrice";

export default function Home() {
  var date = new Date();
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{maxWidth: 600, margin: "auto"}}>
        <h1>Antigua & Barbuda Travel Guide</h1>
        <HeaderRow/>
        <p>Travel to Antigua today! See the breathtaking shorelines and beaches of the Antigua & Barbuda Islands!</p>
        <p><Citation source="Source: Click again to hide the citation. Click the blue text to show the citation again.">Cited text is italicized like this. Click this text to show more.</Citation></p>
        <Image alt="Photo of Sandals Grande Long Beach in Antigua." src={LongBeach}/>
        <h2>Arriving at Antigua</h2>
        <HeaderRow/>
        <p>You will arrive on the Antigua Island through <a href="https://www.google.com/travel/flights?tfs=CBwQARoJcgcIARIDQU5VGglqBwgBEgNBTlVAAUgBcAGCAQsI____________AZgBAQ&tfu=KgIIAw">V.C. Bird International Airport. (ANU)</a> It is on the smaller side of international airports, however the staff are well accomodating to newly arriving travelers. Be sure to visit the <a href="https://www.google.com/maps/place/data=!3m1!4b1!4m6!3m5!1s0x8c1297a7cbb3c489:0xd4da2e03bf2c0dea!8m2!3d17.1413818!4d-61.7910549!16s%2Fg%2F11fqxkq8hr?entry=ttu">Big Banana Restaurant</a> right in the airport!<Citation source={"Source: Google Flights API. Assuming a 7 day trip and departure dates from " + (date.toDateString()) + " to " + ([date.setMonth(new Date().getMonth() + 1), date.toDateString()][1])}><FlightPrice/></Citation></p>
        <div className="center"><SimpleButton href="https://www.google.com/travel/flights?tfs=CBwQARoJcgcIARIDQU5VGglqBwgBEgNBTlVAAUgBcAGCAQsI____________AZgBAQ&tfu=KgIIAw" className="auto-margin">Flights to ANU</SimpleButton></div>
        <br/>
        <Image alt="Photo of V.C. Bird International Airport in Antigua." src={IntlAirport}/>
        <p className="no-indent center">The main entrance of V.C. Bird International Airport.</p>
        <p></p>
        <h2>Arrival Day Activities</h2>
        <HeaderRow/>
        <p>As with most airports, there are several nearby car rental agencies, hotels, and bus stations. Of course, walking, public transportation, and taxis are always an option for an island the size of Antigua.</p>
        <Image alt="Photo of buildings on the coastline of Antigua." src={Coastline}/>
      </main>
    </div>
  );
}
