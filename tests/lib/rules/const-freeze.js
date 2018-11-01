/**
 * @fileoverview Const objects must be declared with Object.freeze
 * @author Kemal Ahmed
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/const-freeze"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ERROR_MSG_NOT_FROZEN = 'Objects declared with const must be initiated with `Object.freeze()`.';

var ruleTester = new RuleTester();
ruleTester.run("const-freeze", rule, {

    valid: [
        {
            code: "const obj = Object.freeze({ attr: 'val' })"
        }
    ],

    invalid: [
        {
            code: "const obj = { attr: 'val' }",
            errors: [{
                message: ERROR_MSG_NOT_FROZEN,
                type: "Me too"
            }]
        }
    ]
});
