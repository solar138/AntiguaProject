import HeaderRow from "@/components/HeaderRow";
import SimpleButton from "@/components/SimpleButton";
import Citation from "@/components/Citation";
import Image from "next/image";
import LongBeach from "@/public/Images/Sandals-Grande-Antigua-Long-Beach.jpg";
import IntlAirport from "@/public/Images/V.C._Bird_International_Airport.png";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{maxWidth: 600, margin: "auto"}}>
        <h1>Antigua & Barbuda Travel Guide</h1>
        <HeaderRow/>
        <p>Travel to Antigua today! See the breathtaking shorelines and beaches of the Antigua & Barbuda Islands!</p>
        <Image alt="Photo of Sandals Grande Long Beach in Antigua." src={LongBeach}/>
        <h2>Arriving at Antigua</h2>
        <HeaderRow/>
        <p>You will arrive on the Antigua Island through <a href="https://www.google.com/travel/flights?tfs=CBwQARoJcgcIARIDQU5VGglqBwgBEgNBTlVAAUgBcAGCAQsI____________AZgBAQ&tfu=KgIIAw">V.C. Bird International Airport.</a> Flights from the U.S. typically range between<Citation source="Source: Google Flights">$700 - $1,000</Citation>asdifojaiosdf jaoisdfj oadjf oiasdjf iosadjf ioasjd fioasjofi </p>
        <Image alt="Photo of V.C. Bird International Airport in Antigua." src={IntlAirport}/>
        <div className="center"><SimpleButton href="https://www.google.com/travel/flights?tfs=CBwQARoJcgcIARIDQU5VGglqBwgBEgNBTlVAAUgBcAGCAQsI____________AZgBAQ&tfu=KgIIAw" className="auto-margin">Flights to V.C. Intl.</SimpleButton></div>
      </main>
    </div>
  );
}
