import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";


const data = [
  {
    id: 1,
    email: "george.bluth@reqres.in",
    first_name: "George",
    last_name: "Bluth",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
  },
  {
    id: 2,
    email: "janet.weaver@reqres.in",
    first_name: "Janet",
    last_name: "Weaver",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"
  },
  {
    id: 3,
    email: "emma.wong@reqres.in",
    first_name: "Emma",
    last_name: "Wong",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"
  },
  {
    id: 4,
    email: "eve.holt@reqres.in",
    first_name: "Eve",
    last_name: "Holt",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  },
  {
    id: 5,
    email: "charles.morris@reqres.in",
    first_name: "Charles",
    last_name: "Morris",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    id: 6,
    email: "tracey.ramos@reqres.in",
    first_name: "Tracey",
    last_name: "Ramos",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  },
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
  }
]




function Home(params) {
  return <h1>Home Page</h1>;
}


function Campaigns(props) {
  return (
    <div>
      <h1>Campaigns Page</h1>
      {props.campaignList.map(campaign => (
        <div keys={campaign.id}>
          <ul>
            <li>
              {/* <h3>Our campaign name is {campaign.last_name}  </h3> */}
              <h3 onClick={() => props.history.push(`/campaign/${campaign.id}/email`)}>Our campaign name is {campaign.last_name} </h3>
              <p>Managed by {campaign.first_name}  </p>
              <p>({campaign.email})</p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}
function CampaignCardEmail(props) {
  return(
    <p>props.campaigncard.email</p>
  )
}
function CampaignCard(props) {
  const campaigncard = props.campaignList.find(
    cCard => cCard.id === parseInt(props.match.params.id, 10)
  );

  return (
    <div>
      <h1>Campaign Card</h1>
      <img src={campaigncard.avatar} alt={campaigncard.first_name} />
      <div>
          <h1>{campaigncard.first_name} {campaigncard.last_name}</h1>
          <h4>({campaigncard.email})</h4>

          <nav>
            <Link to={`/campaign/${campaigncard.id}/email`}>Email</Link>
          </nav>
          <Route
            path="/campaign/:id/email"
            render={props => (
              <CampaignCardEmail {...props} campaigncard={campaigncard} />
            )}
          />
          
        </div>
    </div>
  );
}



function Donors(props) {

  return (
    <div>
      <h1>Donor Page</h1>
      {props.donorList.map(campaign => (
        <div keys={campaign.id}>
          <img src={campaign.avatar} alt={campaign.first_name} />
          <p>({campaign.first_name} {campaign.last_name})</p>

        </div>

      ))}
    </div>
  );

}
function Logout(params) {
  return <h1>Logout Page</h1>;
}
function DashBoard(params) {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/campaign">Campaigns</Link>
          </li>
          <li>
            <Link to="/donor">Donors</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/campaign"
        render={props => (
          <Campaigns {...props} campaignList={data} />
        )}
      // component={Campaigns}
      />
      <Route
        path="/campaign/:id"
        render={props => (
          <CampaignCard {...props} campaignList={data} />
        )}
      />

      <Route
        path="/donor"
        render={props => (
          <Donors {...props} donorList={data} />
        )}
      // component={Donors}
      />
      <Route path="/logot" component={Logout} />

    </BrowserRouter>
  );
}
export default DashBoard;
