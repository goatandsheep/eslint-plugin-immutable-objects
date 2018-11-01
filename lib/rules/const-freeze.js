/**
 * @fileoverview Const objects must be declared with Object.freeze
 * @author Kemal Ahmed
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Const objects must be declared with Object.freeze",
            category: "Immutable",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function (context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section
        
        const freezeObj = function (context) {
            context.insertTextAfter(node, ')')
            context.insertTextBefore(node, 'Object.freeze(')
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            Identifier(node) {
                if (node.name === "foo") {
                    context.report({
                        node,
                        messageId: "avoidName",
                        data: {
                            name: "foo",
                        },
                        fix: freezeObj
                    });
                }
            }

        };
    }
};
