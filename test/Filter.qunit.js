		sap.ui.define("sap.ui.demo.tdg.test.Filter", [
		    "jquery.sap.global",
		    "sap/ui/test/Opa5",
		    "sap/ui/test/opaQunit",
		    "sap/ui/demo/tdg/test/action/FilterAction",
		    "sap/ui/demo/tdg/test/arrangement/CommonArrangement",
		    "sap/ui/demo/tdg/test/assertion/FilterAssertion"
		], function(jQuery, Opa5, opaQunit, FilterAction, CommonArrangement, FilterAssertion) {

		    Opa5.extendConfig({
		        actions: new FilterAction(),
		        arrangements: new CommonArrangement(),
		        assertions: new FilterAssertion(),
		        viewNamespace: "sap.ui.demo.tdg.view."
		    });

		    opaTest("Should filter the list", function(Given, When, Then) {
		        // Arrangements
		        // Given.iStartMyApp();
		        Given.iStartAComponent("sap.ui.demo.tdg");

		        //Actions
		        When.iEnterAFilterForBread();

		        // Assertions
		        Then.iShouldSeeAListWithBreadOnly();
		    });

		    opaTest("Should reset the filter", function(Given, When, Then) {
		        // Actions
		        When.iRemoveTheFilter();

		        // Assertions
		        Then.theProductListShouldHave9Entries();
		    });
		});
