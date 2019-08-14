(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{309:function(e,t,a){"use strict";a.r(t);var o=a(22),i=Object(o.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"introduction-to-wasabi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction-to-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" Introduction to Wasabi")]),e._v(" "),a("h2",{attrs:{id:"the-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-basics","aria-hidden":"true"}},[e._v("#")]),e._v(" The Basics")]),e._v(" "),a("details",{attrs:{id:"explain-wasabi-like-i-m-5"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#explain-wasabi-like-i-m-5","aria-hidden":"true"}},[e._v("#")]),e._v(" Explain Wasabi like I'm 5")]),e._v(" "),a("p",[e._v("Wasabi is a software wallet to manage your Bitcoin private keys.\nIt is tailor made to protect your privacy on every step.\nYou can easily send and receive bitcoin without the permission of anyone.\nWith a special tool called a CoinJoin you can make sure nobody finds out how you spend your money.\nAlthough Wasabi has some very advanced magic under the hood, it is rather easy to use.\nYou can also use Wasabi to manage your hardware wallet, and it even connects to your own full node.\nOf course, Wasabi is libre and open source, which means you have full control over the software you manage your money with.")])]),a("details",{attrs:{id:"who-can-use-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#who-can-use-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" Who can use Wasabi?")]),e._v(" "),a("p",[e._v("Every single line of code in Wasabi, the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Gui",target:"_blank",rel:"noopener noreferrer"}},[e._v("wallet"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Backend",target:"_blank",rel:"noopener noreferrer"}},[e._v("backend server"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Tests",target:"_blank",rel:"noopener noreferrer"}},[e._v("tests"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Packager",target:"_blank",rel:"noopener noreferrer"}},[e._v("packager"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi",target:"_blank",rel:"noopener noreferrer"}},[e._v("library"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/tree/master/WalletWasabi.Gui/CommandLine",target:"_blank",rel:"noopener noreferrer"}},[e._v("daemon"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://wasabiwallet.io/swagger/",target:"_blank",rel:"noopener noreferrer"}},[e._v("api"),a("OutboundLink")],1),e._v(", the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WasabiDoc/tree/master/docs",target:"_blank",rel:"noopener noreferrer"}},[e._v("documentation"),a("OutboundLink")],1),e._v(" - has always been and will always be libre and open source under the "),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/blob/master/LICENSE.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("MIT license"),a("OutboundLink")],1),e._v(".\nThis means that anyone, yes, ANYONE can use Wasabi without permission, for any use case, free of charge.")]),e._v(" "),a("p",[e._v("Wasabi is used by individuals to receive and spend every day payments, to manage their hardware wallet long term hodlings, and to CoinJoin their sats for added privacy.\nThere are also entrepreneurs who use Wasabi to defend their customers from spies and to ensure a private business relationship.\nYoung kids have Wasabi to stack the sats gifted by grandma, and they learn the importance of hodling.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",[e._v("Wasabi is a tool for everyone.")])])]),a("details",{attrs:{id:"what-is-a-coinjoin"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-a-coinjoin","aria-hidden":"true"}},[e._v("#")]),e._v(" What is a CoinJoin?")]),e._v(" "),a("p",[e._v("A mechanism by which multiple participants combine their coins (or UTXOs, to be more precise) into one large transaction with multiple inputs and multiple outputs.\nAn observer cannot determine which output belongs to which input, and neither can the participants themselves.\nThis makes it difficult for outside parties to trace where a particular coin originated from and where it was sent to (as opposed to regular bitcoin transactions, where there is usually one sender and one receiver).")]),e._v(" "),a("p",[e._v("This can be done with non-custodial software like Wasabi that eliminates the risk of funds disappearing or being stolen.\nEach of the signatures are created on the participants’ computers, so anyone trying to connect the signatures is unable to alter the transaction or redirect the funds.\nThe funds will always be in a Bitcoin address that you control.")]),e._v(" "),a("p",[e._v("It’s possible to do this in a decentralized way so that the service does not rely on external parties or centralized servers.\nIt just needs the participants of the transaction.")]),e._v(" "),a("p",[e._v("CoinJoin can be applied multiple times, and as many transactions are grouped together, participants may save on transaction fees.\nCoinJoin is the preferred method of gaining privacy in the Bitcoin network.\nIt is even possible that this functionality might one day be included directly on the protocol level as standard, as some altcoins already do.")]),e._v(" "),a("p",[e._v("In very simple terms, CoinJoin means: “when you want to make a transaction, find someone else who also wants to make a transaction and make a joint transaction together”.")]),e._v(" "),a("p",[e._v("See also the "),a("a",{attrs:{href:"https://en.bitcoin.it/wiki/CoinJoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Bitcoin Wiki on CoinJoins"),a("OutboundLink")],1)])]),a("details",{attrs:{id:"do-i-need-to-trust-wasabi-with-my-coins"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#do-i-need-to-trust-wasabi-with-my-coins","aria-hidden":"true"}},[e._v("#")]),e._v(" Do I need to trust Wasabi with my coins?")]),e._v(" "),a("p",[e._v("No, Wasabi's CoinJoin implementation is trustless by design.\nThe participants do not need to trust each other or any third party. Both the sending address (the CoinJoin input) and the receiving address (the CoinJoin output) are controlled by your own private keys.\nWasabi merely coordinates the process of combining the inputs of the participants into one single transaction, but the wallet can neither steal your coins, nor figure out which outputs belong to which inputs (look up “"),a("a",{attrs:{href:"https://github.com/nopara73/ZeroLink#ii-chaumian-coinjoin",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chaumian CoinJoin"),a("OutboundLink")],1),e._v("” if you want to know more).")])]),a("details",{attrs:{id:"what-is-the-privacy-i-get-after-mixing-with-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-privacy-i-get-after-mixing-with-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the privacy I get after mixing with Wasabi?")]),e._v(" "),a("p",[e._v("This depends on how you handle your outputs after the CoinJoin.\nThere are some ways how you can unintentionally undo the mixing by being careless.\nFor example, if you make a 1.8 BTC transaction into Wasabi, do the CoinJoin, and then make one single outgoing transaction of 1.8 BTC, a third party observer can reasonably assume that both transactions belong to one single entity, due to both amounts being virtually the same even though they have been through a CoinJoin.\nIn this scenario, Wasabi will barely make any improvement to your privacy, although it will still have a protective effect against unsophisticated observers.")]),e._v(" "),a("p",[e._v("Another deanonymizing scenario happens when you combine mixed outputs with unmixed ones when sending: a third party will be able to make the connection between them as belonging to the same sender.")]),e._v(" "),a("p",[e._v("The practice of being careful with your post-mix outputs is commonly facilitated through coin control, which is the default way of interacting with the wallet.\nFind out more about coin control it "),a("a",{attrs:{href:"https://medium.com/@nopara73/coin-control-is-must-learn-if-you-care-about-your-privacy-in-bitcoin-33b9a5f224a2",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")])]),a("details",{attrs:{id:"can-i-hurt-my-privacy-using-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#can-i-hurt-my-privacy-using-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" Can I hurt my privacy using Wasabi?")]),e._v(" "),a("p",[e._v("No.\nThe worst thing that can happen (through user’s negligence post-mix) is that the level of your privacy stays the same as before CoinJoin.\nIt is crucial to understand that Wasabi is not a fool-proof solution if you neglect to practice coin control after the mixing process.")])]),a("details",{attrs:{id:"why-is-wasabi-bitcoin-only"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-wasabi-bitcoin-only","aria-hidden":"true"}},[e._v("#")]),e._v(" Why is Wasabi Bitcoin-only?")]),e._v(" "),a("p",[e._v("There are countless reasons why it is the only logical choice to be "),a("a",{attrs:{href:"https://bitcoin-only.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("bitcoin-only"),a("OutboundLink")],1),e._v(".\nWith Bitcoin we have a once in a lifetime opportunity to manifest libre sound money.\nIf we suceed, then this might emerge an utmost beautiful agora of sovereign individuals.\nIf we fail, then this will conjure up the most horrific Orwellian nightmare.\nThere is no room for wasted time and energy, this Great Work requires our full attention.\nAny line of code written to support a random shitcoin takes away scarce developer time to work on real problems.")])]),a("details",{attrs:{id:"why-is-the-anonymity-set-100"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-the-anonymity-set-100","aria-hidden":"true"}},[e._v("#")]),e._v(" Why is the anonymity set 100??")]),e._v(" "),a("p",[e._v("Sufficient anonymity set is a hard question, that not yet enough research done to answer it definitively.\nThe rough consensus among many privacy researchers is that an anonymity set above 50 could be considered sufficient.\nFurthermore our calculations have shown that with the liquidity of today’s mixers our mixing rounds would take 1 to 5 minutes with 100 anonymity set and 0.1 BTC fixed denomination.")])]),a("h2",{attrs:{id:"for-advanced-wasabikas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-advanced-wasabikas","aria-hidden":"true"}},[e._v("#")]),e._v(" For advanced Wasabikas")]),e._v(" "),a("details",{attrs:{id:"can-the-coordinator-attack-me"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#can-the-coordinator-attack-me","aria-hidden":"true"}},[e._v("#")]),e._v(" Can the coordinator attack me?")]),e._v(" "),a("p",[e._v("The nature of Wasabi is that you should not need to trust the developers or the Wasabi coordinating server, as you can verify that the code does not leak information to anyone.\nThe developers have gone to great lengths in an attempt to ensure that the coordinator cannot steal funds nor harvest information (for example, the outputs sent from your Wasabi Wallet are blinded, meaning that even the Wasabi server cannot link the outputs to the inputs).")]),e._v(" "),a("p",[e._v("The only known possible 'malicious' actions that the server "),a("em",[e._v("could")]),e._v(" perform are two sides of the same coin;")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Blacklisted UTXO's")]),e._v(":\nThough this would not affect the users who are able to successfully mix with other 'honest/real' peers.")]),e._v(" "),a("li",[a("strong",[e._v("Targeted Sybil Attack")]),e._v(":\nThe follow-up concern is the inverse of the above.\nIt is possible that the server could "),a("em",[e._v("only")]),e._v(" include one 'honest/real' coin in the mix and supply the other coins themselves.\nThis would give a false sense of security, "),a("strong",[e._v("but it would not worsen the existing privacy of the coin")]),e._v(".\nIt would also be noticaable to all users excluding the user being targeted as their coins would not be mixed.\nIt has been argued that this 'attack' would be very costly in terms of fees because the number of coins being mixed is verifiable.\nThough it is true that fees would have to be paid to zkSNACKs every round, this does not matter if it is zkSNACKs that is acting maliciously (as they get the funds back).\nTypical rounds currently have <100 people per mix, with the minimum input being ~0.1 BTC with a fee of 0.003% per anonymity set.\nTaking the 'worst case' (100 people, each mixing 0.1 BTC) gives 0.03 BTC per round.\nThis is not prohibitive and is thus a valid concern.\nThat said, if multiple chain-analysis companies attempt to flood the zkSNACKs mix (to decrease the true anonymity set) they will hinder each other's efforts (unless they are cooperating).\nSee "),a("a",{attrs:{href:"https://github.com/nopara73/ZeroLink/#e-sybil-attack",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" for more info.")])])]),a("details",{attrs:{id:"what-is-the-history-of-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-history-of-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the history of Wasabi?")]),e._v(" "),a("p",[e._v("Ádám Ficsor worked with several others on a privacy-focused Bitcoin wallet called Hidden Wallet all the way "),a("a",{attrs:{href:"https://docs.google.com/drawings/d/1wLL7aSgYBWNoyzllg6_haisFt-gQCf-QUzVzQPkARts/edit",target:"_blank",rel:"noopener noreferrer"}},[e._v("back in December 2015"),a("OutboundLink")],1),e._v(".\nWasabi was unveiled in 2018 at the Building on Bitcoin conference by Ádám.\nAt the time, Wasabi was essentially HiddenWallet rebranded and rewritten from scratch with some new features.\nKey dates:")]),e._v(" "),a("ul",[a("li",[e._v("The Beta release was on August 1 (on the first anniversary of UASF.)")]),e._v(" "),a("li",[e._v("The 1.0 release was on October 31 (on the tenth anniversary of the Bitcoin Whitepaper.)")])]),e._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/XORDEX-RrAI/hqdefault.jpg)"},attrs:{"data-id":"XORDEX-RrAI"}},[a("iframe",{attrs:{title:"YouTube XORDEX-RrAI","data-src":"https://www.youtube-nocookie.com/embed/XORDEX-RrAI?start=6420&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])]),a("details",{attrs:{id:"who-is-contributing-to-wasabi"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#who-is-contributing-to-wasabi","aria-hidden":"true"}},[e._v("#")]),e._v(" Who is contributing to Wasabi??")]),e._v(" "),a("p",[e._v("There are many Wasabikas working with great effort and care to manifest this powerful tool of self defense.\n"),a("a",{attrs:{href:"https://github.com/zkSNACKs/WalletWasabi/graphs/contributors",target:"_blank",rel:"noopener noreferrer"}},[e._v("Over 35 peers"),a("OutboundLink")],1),e._v(" have already contributed to the repository, and more and more supporters are joining the "),a("router-link",{attrs:{to:"/building-wasabi/Dojo.html"}},[e._v("dojo")]),e._v(".\nFour of the main contributors are "),a("a",{attrs:{href:"https://github.com/nopara73",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ádám Ficsor"),a("OutboundLink")],1),e._v(" [co-founder and CTO of "),a("a",{attrs:{href:"https://zksnacks.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zkSnacks Ltd"),a("OutboundLink")],1),e._v(", co-author of the "),a("a",{attrs:{href:"https://github.com/nopara73/ZeroLink",target:"_blank",rel:"noopener noreferrer"}},[e._v("zero link Bitcoin fungibility framework"),a("OutboundLink")],1),e._v("], "),a("a",{attrs:{href:"https://github.com/lontivero",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lucas Ontivero"),a("OutboundLink")],1),e._v(" [lead engineer of "),a("a",{attrs:{href:"https://zksnacks.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zkSnacks Ltd"),a("OutboundLink")],1),e._v("], "),a("a",{attrs:{href:"https://github.com/molnard",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dávid Molnár"),a("OutboundLink")],1),e._v(" ["),a("a",{attrs:{href:"https://zksnacks.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("zkSnacks Ltd"),a("OutboundLink")],1),e._v(" employee], and "),a("a",{attrs:{href:"https://github.com/danwalmsley",target:"_blank",rel:"noopener noreferrer"}},[e._v("Dan Walmsley"),a("OutboundLink")],1),e._v(" [maintainer of "),a("a",{attrs:{href:"https://github.com/AvaloniaUI/Avalonia",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avalonia UI Framework"),a("OutboundLink")],1),e._v("].\nFor an inclusive list of all the Wasabikas, not just the code developers, please visit the "),a("router-link",{attrs:{to:"/building-wasabi/Dojo.html"}},[e._v("dojo")]),e._v(".")],1),e._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/F8xNSOhbWrw/hqdefault.jpg)"},attrs:{"data-id":"F8xNSOhbWrw"}},[a("iframe",{attrs:{title:"YouTube F8xNSOhbWrw","data-src":"https://www.youtube-nocookie.com/embed/F8xNSOhbWrw?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/Yg7_3LIutJA/hqdefault.jpg)"},attrs:{"data-id":"Yg7_3LIutJA"}},[a("iframe",{attrs:{title:"YouTube Yg7_3LIutJA","data-src":"https://www.youtube-nocookie.com/embed/Yg7_3LIutJA?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})]),e._v(" "),a("div",{staticClass:"ytEmbed",staticStyle:{"background-image":"url(https://img.youtube.com/vi/X9BB_9faJE8/hqdefault.jpg)"},attrs:{"data-id":"X9BB_9faJE8"}},[a("iframe",{attrs:{title:"YouTube X9BB_9faJE8","data-src":"https://www.youtube-nocookie.com/embed/X9BB_9faJE8?&autoplay=1&autohide=1&modestbranding=1&color=white&rel=0",frameborder:"0",allow:"autoplay;encrypted-media;picture-in-picture",allowfullscreen:""}})])]),a("details",{attrs:{id:"why-is-wasabi-libre-and-open-source-software"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#why-is-wasabi-libre-and-open-source-software","aria-hidden":"true"}},[e._v("#")]),e._v(" Why is Wasabi libre and open source software?")]),e._v(" "),a("p",[e._v("Wasabi follows the philosophy behind Bitcoin by making the software open source and by publishing it under MIT License.\nAverage Bitcoin users prefer open source software to proprietary software for a number of reasons, including:")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Control")]),e._v(" "),a("p",[e._v("Many people prefer open source software because they have more control over that kind of software.")])]),e._v(" "),a("p",[e._v("They can examine the code to make sure it's not doing anything they don't want it to do, and they can change parts of it they don't like.\nUsers who aren't programmers also benefit from open source software, because they can use this software for any purpose they wish—not merely the way someone else thinks they should.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Training")]),e._v(" "),a("p",[e._v("Other people like open source software because it helps them become better programmers.")])]),e._v(" "),a("p",[e._v("Because open source code is publicly accessible, students can easily study it as they learn to make better software.\nStudents can also share their work with others, inviting comment and critique, as they develop their skills.\nWhen people discover mistakes in programs' source code, they can share those mistakes with others to help them avoid making those same mistakes themselves.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Security")]),e._v(" "),a("p",[e._v("Some people prefer open source software because they consider it more secure and stable than proprietary software.")])]),e._v(" "),a("p",[e._v("Because anyone can view and modify open source software, someone might spot and correct errors or omissions that a program's original authors might have missed.\nAnd because so many programmers can work on a piece of open source software without asking for permission from original authors, they can fix, update, and upgrade open source software more quickly than they can proprietary software.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Stability")]),e._v(" "),a("p",[e._v("Many users prefer open source software to proprietary software for important, long-term projects.")])]),e._v(" "),a("p",[e._v("Because programmers publicly distribute the source code for open source software, users relying on that software for critical tasks can be sure their tools won't disappear or fall into disrepair if their original creators stop working on them.\nAdditionally, open source software tends to both incorporate and operate according to open standards.")])]),a("details",{attrs:{id:"what-is-the-general-idea-of-zerolink-coinjoin"}},[a("summary",[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-the-general-idea-of-zerolink-coinjoin","aria-hidden":"true"}},[e._v("#")]),e._v(" What is the general idea of ZeroLink CoinJoin?")]),e._v(" "),a("p",[e._v("While fungibility is an essential property of good money, Bitcoin has its limitations in this area.\nNumerous fungibility improvements have been proposed; however none of them have addressed the privacy issues in full.\nZeroLink is designed so that no participant or outside observer can spy on the user.\nThe scope of ZeroLink is not limited to a single transaction, it extends to transaction chains and it addresses various network layer deanonymizations, however its scope is limited to Bitcoin's first layer.\nEven if an off-chain anonymity solution gets widely adopted, ultimately the entrance and exit transactions will always be settled on-chain.\nTherefore there will always be need for on-chain privacy.")]),e._v(" "),a("p",[e._v("Ideal fungibility requires every Bitcoin transaction to be indistinguishable from each other, but it is an unrealistic goal.\nZeroLink's objective is to break all links between separate sets of coins.\nZeroLink presents a wallet privacy framework coupled with Chaumian CoinJoin, which was first introduced in 2013 by Gregory Maxwell.\nA mixing round runs within seconds, its anonymity set can go beyond a single CoinJoin transaction's if needed, and its DoS resilience presumes a transaction fee environment above $1 Bitcoin.\nHopefully, ZeroLink will enable the usage of Bitcoin in a fully anonymous way for the first time.")]),e._v(" "),a("p",[e._v("ZeroLink defines a pre-mix and a post-mix wallet and a mixing technique.\nPre-mix wallet functionality can be added to any Bitcoin wallet without much overhead.\nPost-mix wallets on the other hand have strong privacy requirements, regarding coin selection, private transaction and balance retrieval, transaction input and output indexing and broadcasting.\nThe requirements and recommendations for pre and post-mix wallets together define the Wallet Privacy Framework.\nCoins from pre-mix wallets to post-mix wallets are moved by mixing. Most on-chain mixing techniques, like CoinShuffle, CoinShuffle++ or TumbleBit's Classic Tumbler mode can be used.\nHowever ZeroLink defines its own mixing technique: Chaumian CoinJoin.")]),e._v(" "),a("p",[e._v("For the complete explanation please read "),a("a",{attrs:{href:"https://github.com/nopara73/ZeroLink/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZeroLink: The Bitcoin Fungibility Framework"),a("OutboundLink")],1),e._v(".")])]),a("h2",{attrs:{id:"further-questions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#further-questions","aria-hidden":"true"}},[e._v("#")]),e._v(" Further Questions")]),e._v(" "),a("ul",[a("li",[e._v("What are the minimal requirements to run Wasabi?")]),e._v(" "),a("li",[e._v("What do peers say about Wasabi?")])])])},[],!1,null,null,null);t.default=i.exports}}]);