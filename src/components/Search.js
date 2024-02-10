import React, { useState } from "react";

function Search() {
  const data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
      address: {
        street: "Kulas Light",
        suite: "Apt.566",
        city: "Gwenboroigh",
        zipcode: "92998-3874",
        geo: {
          lat: "-37.3159",
          lng: "81.1496",
        },
      },
      phone: "1-770-736-8031 x56442",
      website: "hildegard.org",
      company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net,",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 2,
      name: "Alicia Parker",
      username: "Apex",
      email: "Alocoa@apex.gmail.com",
      address: {
        street: "Bakers Street",
        suite: "Apt.97",
        city: "London",
        zipcode: "508936-8938",
        geo: {
          lat: "-39.79799",
          lng: "69.14969",
        },
      },
      phone: "+1-7878-8392 x56442",
      website: "apexlove.org",
      company: {
        name: "Sherlock-Associates",
        catchPhrase: "the best second detective London has ever produced",
        bs: "harness real-time e-markets",
      },
    },
    {
      id: 3,
      name: "Lucifer Morningstar",
      username: "DEVIL",
      email: "HllonEarth@lux.gmail.com",
      address: {
        street: "LUX's Street",
        suite: "Apt.69",
        city: "Los Angeles",
        zipcode: "9669696-8938",
        geo: {
          lat: "-39.79799",
          lng: "69.14969",
        },
      },
      phone: "+1-7878-8392 x56442",
      website: "lux_corp_detective.org",
      company: {
        name: "LUX-Nightclub",
        catchPhrase: "Devil of his word, fallen angel ",
        bs: "King of hell",
      },
    },
  ];
  const [searchQuery, setSearchQuery] = useState("")
  const search_params = Object.keys(Object.assign({}, ...data));
  console.log(search_params);
  return (
    <div>
      <input
        type="search"
        name="search-form"
        id="search-form"
        className="search-input"
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search user"
      />
      {/* {data.map((dataObj) => {
        return (
          <div className="box">
            <div class="card">
              <div class="category">@{dataObj.id} </div>
              <div class="heading">
                {dataObj.name}
                <div class="author">{dataObj.email}</div>
              </div>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}

export default Search;
