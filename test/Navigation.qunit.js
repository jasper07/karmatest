			// sap.ui.define("sap.ui.demo.tdg.test.Filter", [
			//     "jquery.sap.global",
			//     "sap/ui/test/Opa5",
			//     "sap/ui/test/opaQunit",
			//     "sap/ui/demo/tdg/test/action/NavigationAction",
			//     "sap/ui/demo/tdg/test/arrangement/NavigationArrangement",
			//     "sap/ui/demo/tdg/test/assertion/NavigationAssertion"
			// ], function(jQuery, Opa5, opaQunit, NavigationAction, NavigationArrangement, NavigationAssertion) {

			//     Opa5.extendConfig({
			//         actions: new NavigationAction(),
			//         arrangements: new NavigationArrangement(),
			//         assertions: new NavigationAssertion(),
			//         viewNamespace: "sap.ui.demo.tdg.view."
			//     });

			//     module("inner app navigation");

			//     opaTest("Should see the category list", function(Given, When, Then) {
			//         // Arrangements
			//         // Given.iStartMyAppInAFrame("../index.html?responderOn=true");
			//         Given.iStartAComponent("sap.ui.demo.tdg");

			//         //Actions
			//         When.iLookAtTheScreen();

			//         // Assertions
			//         Then.iShouldSeeTheProductsList().
			//         and.theProductListShouldHave9Entries().
			//         and.theDetailPageShowsTheFirstProduct();
			//     });

			//     opaTest("Should navigate on press", function(Given, When, Then) {
			//         // Actions
			//         When.iPressOnTheMilkProduct();

			//         // Assertions
			//         Then.iShouldBeOnTheMilkDetailPage();
			//     });

			//     opaTest("Should react on hashchange", function(Given, When, Then) {
			//         // Actions
			//         When.iChangeTheHashToTheThirdProduct();

			//         // Assertions
			//         Then.iShouldBeOnTheVintSodaDetailPage().and.iTeardownMyAppFrame();
			//     });

			//     module("deeplinks");

			//     opaTest("Should go directly to the third product", function(Given, When, Then) {
			//         // Actions
			//         Given.iStartMyAppWithTheThirdProduct();

			//         //Actions
			//         When.iLookAtTheScreen();

			//         // Assertions
			//         Then.iShouldBeOnTheVintSodaDetailPage();
			//     });
			// });
