﻿/** @license
 | Version 10.2
 | Copyright 2012 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
dojo.provide("js.Config");
dojo.declare("js.Config", null, {

    // This file contains various configuration settings for "Election Polling Place" template
    //
    // Use this file to perform the following:
    //
    // 1.  Specify application title                  - [ Tag(s) to look for: ApplicationName ]
    // 2.  Set path for application icon              - [ Tag(s) to look for: ApplicationIcon ]
    // 3.  Set splash screen message                  - [ Tag(s) to look for: SplashScreenMessage ]
    // 4.  Set URL for help page                      - [ Tag(s) to look for: HelpURL ]
    //
    // 5.  Specify URLs for basemaps                  - [ Tag(s) to look for: BaseMapLayers ]
    // 6.  Set initial map extent                     - [ Tag(s) to look for: DefaultExtent ]
    //
    // 7.  Choose to use WebMap or map services       - [ Tag(s) to look for: UseWebmap <true/false> ]
    // 8.  Specify WebMapId, if using WebMap          - [ Tag(s) to look for: WebMapId ]
    // 9.  Or for using map services:
    // 9a. Specify URLs for operational layers        - [ Tag(s) to look for: PollLayer, PollMobileLayer, PrecinctLayer, PrecinctOfficeLayer, PollingCommentsLayer, ReferenceOverlayLayer ]
    // 9b. Customize info-Window settings             - [ Tag(s) to look for: InfoWindowHeader, InfoWindowContent ]
    // 9c. Customize info-Popup settings              - [ Tag(s) to look for: InfoPopupFieldsCollection, ShowCommentsTab ]
    // 9d. Customize info-Popup size                  - [ Tag(s) to look for: InfoPopupHeight, InfoPopupWidth ]
    // 9e. Customize data formatting                  - [ Tag(s) to look for: ShowNullValueAs, FormatDateAs ]
    //
    // 10. Customize address search settings          - [ Tag(s) to look for: LocatorSettings ]
    //
    // 11. Set URL for geometry service               - [ Tag(s) to look for: GeometryService ]
    //
    // 12. Customize routing settings for directions  - [ Tag(s) to look for: RouteServiceURL, RouteColor, RouteWidth ]
    // 12a.Choose destination for route generation    - [ Tag(s) to look for: GenerateRouteToNonDesignatedPollingPlace <true/false> ]
    //
    // 13. Configure data to be displayed on the bottom panel
    //                                                - [ Tag(s) to look for: InfoBoxWidth, PollingPlaceTabData, ElectedOfficialsTabData ]
    //
    // 14. Specify URLs for map sharing               - [ Tag(s) to look for: FacebookShareURL, TwitterShareURL, ShareByMailLink ]
    // 14a.In case of changing the TinyURL service
    //     Specify URL for the new service            - [ Tag(s) to look for: MapSharingOptions (set TinyURLServiceURL, TinyURLResponseAttribute) ]
    //
    //

    // ------------------------------------------------------------------------------------------------------------------------
    // GENERAL SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set application title
    ApplicationName: "Election Polling Place",

    // Set application icon path
    ApplicationIcon: "images/EPPIcon.png",

    // Set splash window content - Message that appears when the application starts
    SplashScreenMessage: "<b>Election Polling Places</b> <br/> <hr/> <br/> The <b>Election Polling Places</b> application helps citizens locate their election polling place, comment on the conditions at the polling place, and obtain information about current elected officials. To locate a polling place, simply click on the map or enter an address in the search box.  The polling place and respective voting precinct will then be highlighted on the map and information about the polling place and elected officials displayed in two tabs along the bottom of the map.<br/><br/>",

    // Set URL of help page/portal
    HelpURL: "help.htm",

    // ------------------------------------------------------------------------------------------------------------------------
    // BASEMAP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set baseMap layers
    // Please note: All basemaps need to use the same spatial reference. By default, on application start the first basemap will be loaded
    BaseMapLayers:
          [
                    {
                        Key: "parcelMap",
                        ThumbnailSource: "images/parcelMap.png",
                        Name: "Parcel Map",
                        MapURL: "http://localgovtemplates.esri.com/ArcGIS/rest/services/ParcelPublicAccess/MapServer"
                    },
                    {
                        Key: "hybridMap",
                        ThumbnailSource: "images/imageryHybrid.png",
                        Name: "Hybrid Map",
                        MapURL: "http://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer"
                    }
          ],

    // Initial map extent. Use comma (,) to separate values and don t delete the last comma
    DefaultExtent: "-9817810,5124390,-9808630,5128700",

    // ------------------------------------------------------------------------------------------------------------------------
    // OPERATIONAL DATA SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Choose if you want to use WebMap or Map Services for operational layers
    UseWebmap: false,

    // if using WebMap, specify WebMapID within quotes, otherwise leave this empty and configure operational layers
    WebMapId: "2e205ed5c9fd48d182c7193e5dee241f",
    // if using WebMap, rest of the operational data settings will be picked up from WebMap

    // if not using WebMap, set the following options
    // Configure operational layers:
    PollLayer:
          {
              ServiceUrl: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/DoNotUse/DoNotUsePollingPlaces/MapServer/0",
              Image: "images/pollingPlace.png",
              UseImage: false,
              PrimaryKeyForPolling: "${POLLINGID}"
          },
    PollMobileLayer:
          {
              ServiceUrl: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/DoNotUse/DoNotUsePollingPlaces/MapServer/0",
              Image: "images/pollingPlace.png",
              UseImage: false,
              PrimaryKeyForPolling: "${POLLINGID}"
          },

    PrecinctLayer:
          {
              ServiceUrl: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Election/Precincts/MapServer/0",
              Color: "#00ff00",
              Alpha: 0.75,
              UseColor: false
          },

    PrecinctOfficeLayer: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/DoNotUse/DoNotUsePollingPlaces/MapServer/1",

    // Set field for precinct ID
    PrecinctID: "${PRECINCTID}",

    PollingCommentsLayer: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/DoNotUse/DoNotUsePollingPlaces/FeatureServer/2",
    // Set primary key for comments table
    PrimaryKeyForComments: "${POLLINGID}",

    // ServiceUrl is the REST end point for the reference overlay layer
    // DisplayOnLoad setting this will show the reference overlay layer on load
    ReferenceOverlayLayer:
          {
              ServiceUrl: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Election/ReferenceOverlay/MapServer",
              DisplayOnLoad: false
          },


    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-WINDOW SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Info-window is a small, two line popup that gets displayed on selecting a feature
    // Set Info-window title. Configure this with text/fields
    InfoWindowHeader: "${NAME}",

    // Choose content/fields for the info window
    InfoWindowContent: "${FULLADD}",

    // ------------------------------------------------------------------------------------------------------------------------
    // INFO-POPUP SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Info-popup is a popup dialog that gets displayed on selecting a feature
    // Set the content to be displayed on the info-Popup. Define labels, field values, field types and field formats
    InfoPopupFieldsCollection:
          [
                    {
                        DisplayText: "Address:",
                        FieldName: "${FULLADD},${CITY},${STATE}"
                    },
                    {
                        DisplayText: "Registration Deadline:",
                        FieldName: "${REGDATE}"
                    },
                    {
                        DisplayText: "Election Date:",
                        FieldName: "${NEXTELECT}"
                    },
                    {
                        DisplayText: "Hours:",
                        FieldName: "${OPERHOURS}"
                    },
                    {
                        DisplayText: "ADA Accessible:",
                        FieldName: "${HANDICAP}"
                    },
                    {
                        DisplayText: "Contact:",
                        FieldName: "${CONTACT}"
                    },
                    {
                        DisplayText: "Phone:",
                        FieldName: "${PHONE}"
                    },
                    {
                        DisplayText: "Email:",
                        FieldName: "${EMAIL}"
                    }
          ],

    // Set this to true to show "Comments" tab in the info-Popup
    ShowCommentsTab: true,


    // Set size of the info-Popup - select maximum height and width in pixels (not applicable for tabbed info-Popups)
    InfoPopupHeight: 260, //minimum height should be 260 for the info-popup in pixels
    InfoPopupWidth: 330, //minimum width should be 330 for the info-popup in pixels

    // Set string value to be shown for null or blank values
    ShowNullValueAs: "N/A",

    // Set date format
    FormatDateAs: "MMM dd, yyyy",


    // ------------------------------------------------------------------------------------------------------------------------
    // ADDRESS SEARCH SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------

    // Set Locator service settings
    LocatorSettings: {
        DefaultLocatorSymbol: "images/RedPushpin.png",
        SymbolSize: { width: 25, height: 25 },
        DefaultValue: "321 Redbud Dr,Naperville,IL,60540",
        LocatorParameters: ["SingleLine"],
        LocatorFields: ["Address", "City", "State", "Zip"],
        LocatorURL: "http://tasks.arcgisonline.com/ArcGIS/rest/services/Locators/TA_Address_NA_10/GeocodeServer",
        CandidateFields: "Loc_name, Score, Match_addr",
        FieldName: "${Match_addr}",
        LocatorFieldName: 'Loc_name',
        LocatorFieldValues: ["US_Streets", "US_StreetName"],
        AddressMatchScore: 80,
        LocatorRippleSize: 40
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // GEOMETRY SERVICE SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set geometry service URL
    GeometryService: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Geometry/GeometryServer",


    // ------------------------------------------------------------------------------------------------------------------------
    // DRIVING DIRECTIONS SETTINGS
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for routing service (network analyst)
    RouteServiceURL: "http://tasks.arcgisonline.com/ArcGIS/rest/services/NetworkAnalysis/ESRI_Route_NA/NAServer/Route",

    // Set color for the route symbol
    RouteColor: "#7F7FFE",

    // Set width of the route
    RouteWidth: 6,

    // Choose destination polling place for route generation
    // If set to true, route will be generated for any selected polling place; otherwise route will be generated for the designated polling place
    GenerateRouteToNonDesignatedPollingPlace: false,

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR INFO-PODS ON THE BOTTOM PANEL
    // ------------------------------------------------------------------------------------------------------------------------
    // Set width of the boxes in the bottom panel
    InfoBoxWidth: 422,


    // Set data to be displayed in the "Polling Place" tab on the bottom panel
    PollingPlaceTabData:
          {
              DetailsBox:
                    {
                        HeaderColor: "#303030",
                        Title: "<b>Details</b>",
                        Data:
                              [
                                        {
                                            DisplayText: "Name:",
                                            FieldName: "${NAME}"
                                        },
                                        {
                                            DisplayText: "Address:",
                                            FieldName: "${FULLADD},${CITY},${STATE}"
                                        },
                                        {
                                            DisplayText: "Hours:",
                                            FieldName: "${OPERHOURS}"
                                        },
                                        {
                                            DisplayText: "ADA Accessible:",
                                            FieldName: "${HANDICAP}"
                                        }
                              ]
                    },
              InformationBox:
                    {
                        HeaderColor: "#303030",
                        Title: "<b>Information</b>",
                        AttachmentDisplayField: "Ballot",
                        Data:
                              [
                                        {
                                            DisplayText: "Registration Deadline:",
                                            FieldName: "${REGDATE}"
                                        },
                                        {
                                            DisplayText: "Election Date:",
                                            FieldName: "${NEXTELECT}"
                                        }
                              ]
                    },
              ContactBox:
                    {
                        HeaderColor: "#303030",
                        Title: "<b>Contact</b>",
                        Data:
                              [
                                        {
                                            DisplayText: "Contact:",
                                            FieldName: "${CONTACT}"
                                        },
                                        {
                                            DisplayText: "Phone:",
                                            FieldName: "${PHONE}"
                                        },
                                        {
                                            DisplayText: "Email:",
                                            FieldName: "${EMAIL}"
                                        }
                              ]
                    },
              DirectionBox:
                    {
                        HeaderColor: "#303030",
                        Title: "<b>Directions</b>",
                        ShowDirection: true
                    },
              CommentsBox:
                    {
                        HeaderColor: "#303030",
                        Title: "<b>Comments</b>"
                    }
          },

    // Set data to be displayed in the "Elected Officials" tab on the bottom panel
    ElectedOfficialsTabData:
          {
              USCongressionalLayer:
                    {
                        ServiceUrl: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Election/Precincts/MapServer/4",
                        HeaderColor: "#303030",
                        Title: "<b>US Congressional District</b>",
                        Data:
                              [
                                        {
                                            DisplayText: "District ID:",
                                            FieldName: "${DISTRICTID}"
                                        },
                                        {
                                            DisplayText: "District Name:",
                                            FieldName: "${NAME}"
                                        },
                                        {
                                            DisplayText: "District URL:",
                                            FieldName: "${DISTRICTURL}"
                                        },
                                        {
                                            DisplayText: "Representative(s):",
                                            FieldName: "${REPNAME}"
                                        }
                              ]
                    },
              StateSenateLayer:
                    {
                        ServiceUrl: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Election/Precincts/MapServer/3",
                        HeaderColor: "#303030",
                        Title: "<b>State Senate District</b>",
                        Data:
                              [
                                        {
                                            DisplayText: "District ID:",
                                            FieldName: "${DISTRICTID}"
                                        },
                                        {
                                            DisplayText: "District Name:",
                                            FieldName: "${NAME}"
                                        },
                                        {
                                            DisplayText: "District URL:",
                                            FieldName: "${DISTRICTURL}"
                                        },
                                        {
                                            DisplayText: "Representative(s):",
                                            FieldName: "${REPNAME}"
                                        }
                              ]
                    },
              StateHouseLayer:
                    {
                        ServiceUrl: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Election/Precincts/MapServer/2",
                        HeaderColor: "#303030",
                        Title: "<b>State House District</b>",
                        Data:
                              [
                                        {
                                            DisplayText: "District ID:",
                                            FieldName: "${DISTRICTID}"
                                        },
                                        {
                                            DisplayText: "District Name:",
                                            FieldName: "${NAME}"
                                        },
                                        {
                                            DisplayText: "District URL:",
                                            FieldName: "${DISTRICTURL}"
                                        },
                                        {
                                            DisplayText: "Representative(s):",
                                            FieldName: "${REPNAME}"
                                        }
                              ]
                    },
              CountyLayer:
                    {
                        ServiceUrl: "http://localgovtemplates2.esri.com/ArcGIS/rest/services/Election/Precincts/MapServer/1",
                        HeaderColor: "#303030",
                        Title: "<b>County District</b>",
                        Data:
                              [
                                        {
                                            DisplayText: "District ID:",
                                            FieldName: "${DISTRICTID}"
                                        },
                                        {
                                            DisplayText: "District Name:",
                                            FieldName: "${NAME}"
                                        },
                                        {
                                            DisplayText: "District URL:",
                                            FieldName: "${DISTRICTURL}"
                                        },
                                        {
                                            DisplayText: "Representative(s):",
                                            FieldName: "${REPNAME}"
                                        }
                              ]
                    }
          },

    // Define the database field names
    // Note: DateFieldName refers to a date database field.
    // All other attributes refer to text database fields.
    DatabaseFields: {
        PollingIdFieldName: "POLLINGID",
        CommentsFieldName: "COMMENTS",
        DateFieldName: "SUBMITDT"
    },

    // Set info-pop fields for displaying comment
    CommentsInfoPopupFieldsCollection: {
        Submitdate: "${SUBMITDT}",
        Comments: "${COMMENTS}"
    },

    // ------------------------------------------------------------------------------------------------------------------------
    // SETTINGS FOR MAP SHARING
    // ------------------------------------------------------------------------------------------------------------------------
    // Set URL for TinyURL service, and URLs for social media
    MapSharingOptions:
          {
              TinyURLServiceURL: "http://api.bit.ly/v3/shorten?login=esri&apiKey=R_65fd9891cd882e2a96b99d4bda1be00e&uri=${0}&format=json",
              TinyURLResponseAttribute: "data.url",

              FacebookShareURL: "http://www.facebook.com/sharer.php?u=${0}&t=Election%20Polling%20Place",
              TwitterShareURL: "http://twitter.com/home/?status=Election%20Polling%20Place ${0}",
              ShareByMailLink: "mailto:%20?subject=Checkout%20this%20map!&body=${0}"
          }
});
