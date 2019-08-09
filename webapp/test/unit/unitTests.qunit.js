/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Git/ZApprove_Customer/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});