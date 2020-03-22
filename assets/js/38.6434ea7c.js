(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{253:function(e,t,a){"use strict";a.r(t);var r=a(17),n=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"joinmarket"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joinmarket"}},[e._v("#")]),e._v(" JoinMarket")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#introduction-and-history"}},[e._v("Introduction and History")])]),a("li",[a("a",{attrs:{href:"#market-makers"}},[e._v("Market Makers")])]),a("li",[a("a",{attrs:{href:"#market-takers"}},[e._v("Market Takers")])]),a("li",[a("a",{attrs:{href:"#joinmarket-wasabi"}},[e._v("JoinMarket + Wasabi")])])])]),a("p"),e._v(" "),a("hr"),e._v(" "),a("h2",{attrs:{id:"introduction-and-history"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-and-history"}},[e._v("#")]),e._v(" Introduction and History")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket-clientserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("JoinMarket"),a("OutboundLink")],1),e._v(" is a CoinJoin protocol implemented in a wallet software which requires Bitcoin Core as the back end.\nIts novel innovation is to introduce incentive structures to encourage users to mix their coins.\nOne market taker can pay many market makers to create a tailor-made CoinJoin.\nThe software consists of several python scripts, has a graphical user interface, and utilizes IRC communication channels.\nThe mainnet launch was in March 2015, with v0.1.0 released in December 2015 by "),a("a",{attrs:{href:"https://github.com/chris-belcher",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chris Belcher"),a("OutboundLink")],1),e._v(", and since then it has gathered steady support by several contributors, most notably "),a("a",{attrs:{href:"https://github.com/AdamISZ",target:"_blank",rel:"noopener noreferrer"}},[e._v("Adam Gibson"),a("OutboundLink")],1),e._v(".\nJoinMarket is an integral part of the Bitcoin privacy infrastructure.\nThe research and implementation by the contributors are invaluable.")]),e._v(" "),a("p",[e._v("JoinMarket is well "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket-clientserver/tree/master/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("documented"),a("OutboundLink")],1),e._v(" in regards to "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/INSTALL.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("installation"),a("OutboundLink")],1),e._v(", usage of the "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/USAGE.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line interface"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/JOINMARKET-QT-GUIDE.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("graphical user interface"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"market-makers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#market-makers"}},[e._v("#")]),e._v(" Market Makers")]),e._v(" "),a("p",[e._v("JoinMarket makers are users running the "),a("a",{attrs:{href:"https://github.com/JoinMarket-Org/joinmarket-clientserver/blob/master/docs/YIELDGENERATOR.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("yield generator script"),a("OutboundLink")],1),e._v(" and offering their coins as potential inputs in a CoinJoin transaction.\nThese users advertise the total volume of bitcoin they would like to mix [for example a range from 0.1 to 5 bitcoins], as well as the fee they charge for their provided service [for example at least 2000 sats, or 0.02% of the CoinJoin denomination] to a public IRC channel.\nA maker chooses to offer coins for liquidity knowing that the taker can deanonymize the maker in this one transaction, thus it is advised to do several rounds of making with different takers to gain privacy even against any one taker.\nThe requirement is an always on, stable and relatively high bandwidth internet connection, so as to successfully coordinate many mixes.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Reclaim your privacy & stack sats!")]),e._v(" "),a("p",[e._v("JoinMarket makers get paid to do tailor-made CoinJoins with the taker.")])]),e._v(" "),a("h2",{attrs:{id:"market-takers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#market-takers"}},[e._v("#")]),e._v(" Market Takers")]),e._v(" "),a("p",[e._v("JoinMarket takers are users who coordinate a tailor-made CoinJoin, and they pay the makers to provide the liquidity.\nTakers analyze the range and fees of coins offered by makers, specify a transaction where the makers coins are part of the input, and the output creates equal value coins.\nThe number of makers and the value of the outputs is completely up to the taker, it is a tailor-made CoinJoin.\nAlthough makers cannot link the input to the output of other makers, the taker knows exactly which maker gets which output.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Create CoinJoins just how you like them!")]),e._v(" "),a("p",[e._v("JoinMarket takers pay for coordinating tailor-made mixes.")])]),e._v(" "),a("h2",{attrs:{id:"joinmarket-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#joinmarket-wasabi"}},[e._v("#")]),e._v(" JoinMarket + Wasabi")]),e._v(" "),a("p",[e._v("The advantage of JoinMarket is that the taker can coordinate tailor-made mixes, and that the maker gets paid to join.\nThe problem with JoinMarket is that the maker has no privacy against the coordinating taker.\nThe advantage of Wasabi is that the coordinator cannot spy, and that Wasabi mixes achieve high anonset.\nThe problem with Wasabi is that there are standardized equal value output amounts.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("A perfect match!")]),e._v(" "),a("p",[e._v("The problems with Wasabi are the strengths of JoinMarket, and the downsides of JoinMarket are the features of Wasabi!")])]),e._v(" "),a("p",[e._v("These two tools can be combined in great effect, thus it is on the long term road-map to implement JoinMarket functionality in Wasabi Wallet.\nFor example such a protocol:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("With your non-private coins, make at least two rounds of Wasabi ZeroLink CoinJoins.\nThis means that your pre-mix coins are not tied to the following JoinMarket mixers.")])]),e._v(" "),a("li",[a("p",[e._v("With these anonset coins, run the yield generator as a JoinMarket maker for as long as possible, partaking in many mixes with many different takers.\nIn this step you gain privacy, in that you were part of the initial Wasabi mix.\nFurther, the mixing fees you earn might be enough to pay at least for the transaction and coordination fees of the whole process.")])]),e._v(" "),a("li",[a("p",[e._v("With these JoinMarket coins, make at least two rounds of Wasabi ZeroLink CoinJoins.\nThis will break the JoinMarket history of these coins, thus nobody knows you were a maker.")])]),e._v(" "),a("li",[a("p",[e._v("With these high anonset coins, coordinate a tailor-made CoinJoin as a JoinMarket taker, where you can specify exactly the value you want to actually send.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);