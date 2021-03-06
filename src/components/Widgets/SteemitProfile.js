import React, { PureComponent } from "react";

import Base from "./Base";

class SteemitProfile extends PureComponent {
  componentDidMount() {
    window.steemitWidgets.profile({
      element: "steemit-widgets-profile",
      template:
        '<div style="border: 5px solid rgb(102, 0, 19); border-radius: 5px; font-family: Arial, Helvetica, sans-serif;"><div style="background-image: url(\'${COVERIMAGE}\'); background-position: center center; background-size: cover; background-color: rgb(102, 0, 19); display: flex; border-top-right-radius: 0px; border-top-left-radius: 0px;"><div style="background: url(\'${IMAGE}\') center center / cover; width: 50px; height: 50px; border-radius: 36px; margin: 10px;"></div> <div style="flex: 1 1 0%; margin: 10px; line-height: 18px; text-align: left;"><a href="https://steemit.com/@${USER}" style="color: rgb(255, 255, 255); text-decoration: none;">@${USER}</a> <span style="background: rgb(102, 0, 19); border-radius: 10px; color: rgb(255, 255, 255); font-size: 11px; padding: 2px 5px; font-weight: bold; border: 1px solid rgba(255, 255, 255, 0.5);">${REPUTATION}</span><br> <a href="${WEBSITE}" style="color: rgb(255, 255, 255); font-size: 12px; text-decoration: none;">${WEBSITE}</a><br> <span style="color: rgb(255, 255, 255); font-size: 12px;">${ABOUT}</span></div></div> <div style="color: rgb(120, 120, 120); background: rgb(255, 255, 255);"><div style="display: table; table-layout: fixed; width: 100%; text-align: center; font-size: 18px; line-height: 21px; padding: 10px 0px 5px;"><div style="display: table-cell;"><b>${POSTCOUNT}</b><br><sup>Posts</sup></div> <div style="display: table-cell;"><b>${FOLLOWERS}</b><br><sup>Followers</sup></div> <div style="display: table-cell;"><b>${FOLLOWING}</b><br><sup>Following</sup></div></div> <div style="display: table; table-layout: fixed; width: 100%; text-align: center; font-size: 12px; border-top: 1px solid rgb(221, 221, 221); padding: 5px 0px;"><div style="display: table-cell;"><span style="width: 15px; height: 15px; display: inline-block; vertical-align: top; margin-right: 3px;"><svg fill="#888888" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><g><path d="M50.2,39.9c-2.3,0-4.1,1.8-4.1,4.1v41.5c0,2.3,1.8,4.1,4.1,4.1c2.3,0,4.1-1.8,4.1-4.1V44C54.3,41.7,52.4,39.9,50.2,39.9z"></path><path d="m30.4,39.9c-2.3,0-4.1,1.8-4.1,4.1v41.5c0,2.3 1.8,4.1 4.1,4.1s4.1-1.8 4.1-4.1v-41.5c0-2.3-1.9-4.1-4.1-4.1z"></path><path d="m10.5,105h86.7c2.3,0 4.1-1.8 4.1-4.1v-17.4h17.2c2.3,0 4.1-1.8 4.1-4.1v-30c0-2.3-1.8-4.1-4.1-4.1h-17.2v-17.2c0-2.3-1.8-4.1-4.1-4.1h-86.7c-2.3,0-4.1,1.8-4.1,4.1v72.8c0,2.2 1.9,4.1 4.1,4.1zm90.8-51.5h13.1v21.9h-13.1v-21.9zm-86.7-21.3h78.5v17.2 30 17.4h-78.5v-64.6z"></path></g></g></svg></span>Voting Power: ${VOTINGPOWER} %</div> <div style="display: table-cell;"><span style="width: 15px; height: 15px; display: inline-block; vertical-align: top;"><svg fill="#888888" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></svg></span> Joined: ${CREATED}</div> <div style="display: table-cell;"><span style="width: 15px; height: 15px; display: inline-block; vertical-align: top;"><svg fill="#888888" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg></span> ${LOCATION}</div></div></div></div>',
      user: "cryptopotluck",
      reputationPrecision: 1,
      votingPowerPrecision: 1,
      updateInterval: 60
    });
  }

  render() {
    return <div id="steemit-widgets-profile" />;
  }
}

export default Base(SteemitProfile);
