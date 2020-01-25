$(document).ready(function () {
    // Load Videos in the Docs
    $('img[alt="YOUTUBE"]').each(function () {
        var id = $(this).attr('src').split('/')[$(this).attr('src').split('/').length - 1];
        var video = '<iframe style="width: 100%;height: 450px;" src="https://www.youtube.com/embed/' + id + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>';
        $(this).replaceWith(video);
    });

    // Lightbox
    // event.preventDefault();
    $(this).ekkoLightbox();
});


/**
 * Thanks to @ColinTree for the GitBook Plugin, based on which this script is written
 * https://github.com/ColinTree/gitbook-plugin-ai2-blocks
 */


const COLOUR_EVENT = '#fda729';
const COLOUR_METHOD = '#6049b1';
const COLOUR_GET = '#8bc24a';
const COLOUR_SET = '#388e3c';

var ComponentName = "Component";

var CONF_TEXT_WHEN = 'when';
var CONF_TEXT_DO = 'do';
var CONF_TEXT_CALL = 'call';
var CONF_TEXT_SET = 'set';
var CONF_SCALE_LEVEL = 1;
var CONF_MARGIN_LEFT = 0;
var CONF_MARGIN_TOP = 0;
var CONF_MARGIN_RIGHT = 0;
var CONF_MARGIN_BOTTOM = 0;

// will be increased automatically by getBlock(json)
var blockIndex = 0;
var blockId = 'block0';

function renderAndGetBlock(id, scale, margin_left, margin_top, margin_right, margin_bottom) {
    var workspace = Blockly.inject(id, {
        toolbox: false,
        trashcan: false,
        readOnly: true,
        scrollbars: false
    });
    workspace.setScale(scale);

    var block = workspace.newBlock('renderedBlock_' + id);
    block.initSvg();
    block.moveBy(8 + margin_left, margin_top);
    block.render();

    var metrics = workspace.getMetrics();
    $("#" + id)
        .height(metrics.contentHeight + margin_top + margin_bottom)
        .width(metrics.contentWidth + 8 + margin_left + margin_right);
    Blockly.svgResize(workspace);
    workspace.render();
    return block;
}


// We have the seperate function for the Event block to add styling to the parameters
// so that they appear in the same colour as in Kodular Creator
function renderEventBlock(id, params_count) {
    var block = renderAndGetBlock(id, 1, 0, 0, 0, 0, 0);
    for (var i = 0; i < params_count; i++) {
        if (block.getField('VAR' + i)) {
            Blockly.utils.addClass(block.getField('VAR' + i).fieldGroup_, "event-parameter");
        }
    }
}

/**
 * Returns the data a required block
 * @param json data about a single block
 * @returns object or null
 */
function getBlock(json) {
    blockIndex++;
    blockId = 'block' + blockIndex;
    var blockData = JSON.parse(json);
    if (typeof (blockData) != "object") {
        console.error("block info is not a json object");
        return null;
    }
    if (typeof (blockData['componentName']) != "undefined" && blockData['componentName'].length > 0) {
        ComponentName = blockData.componentName;
    }
    return blockData;
}

function renderSingleBlockDiv(divElement) {
    var block = getBlock(decodeURI(divElement.getAttribute('value')));
    divElement.setAttribute('id', blockId)
    divElement.style.display = 'block'; // show

    var type = divElement.getAttribute("ai2-block");
    var name = block['name'];
    var scale = block['scale'] || CONF_SCALE_LEVEL;
    var margin_left = block['margin_left'] || block['margin'] || CONF_MARGIN_LEFT;
    var margin_top = block['margin_top'] || block['margin'] || CONF_MARGIN_TOP;
    var margin_right = block['margin_right'] || block['margin'] || CONF_MARGIN_RIGHT;
    var margin_bottom = block['margin_bottom'] || block['margin'] || CONF_MARGIN_BOTTOM;
    if (type == 'method') {
        var param = block['param'] || block['arg'] || [];
        var output = block['output'] === true;

        Blockly.Blocks['renderedBlock_' + blockId] = {
            init: function () {
                this.appendDummyInput().appendField(CONF_TEXT_CALL).appendField(new Blockly.FieldDropdown([[ComponentName, 'OPTIONNAME']]), 'COMPONENT_SELECTOR').appendField('.' + name);
                for (var i = 0; i < param.length; i++) {
                    this.appendValueInput('NAME').setAlign(Blockly.ALIGN_RIGHT).appendField(param[i]);
                }
                this.setInputsInline(false);
                if (output) {
                    this.setOutput(true, null);
                } else {
                    this.setPreviousStatement(true, null);
                    this.setNextStatement(true, null);
                }
                this.setColour(COLOUR_METHOD);
            }
        };

        // EVENTS
    } else if (type == 'event') {
        var param = block['param'] || block['arg'] || [];

        Blockly.Blocks['renderedBlock_' + blockId] = {
            init: function () {
                this.appendDummyInput('').appendField(CONF_TEXT_WHEN).appendField(new Blockly.FieldDropdown([[ComponentName, 'OPTIONNAME']]), "COMPONENT_SELECTOR").appendField('.' + name);
                if (param.length > 0) {
                    var paramInput = this.appendDummyInput('PARAMETERS').appendField(" ").setAlign(Blockly.ALIGN_LEFT);
                    for (var i = 0; i < param.length; i++) {
                        paramInput.appendField(new Blockly.FieldTextInput(param[i]), 'VAR' + i).appendField(" ");
                    }
                }
                this.appendStatementInput("DO").appendField(CONF_TEXT_DO);
                this.setInputsInline(false);
                this.setPreviousStatement(false, null);
                this.setNextStatement(false, null);
                this.setColour(COLOUR_EVENT);
                // Trying to render the block here goes into an infinite loop for some reason
                // renderEventBlock(blockId, param.length);
                // return;
            }
        };

        // PROPERTIES
    } else if (type == 'property') {
        var getter = block['getter'];
        if (getter !== true && getter !== false) {
            getter = true;
        }

        Blockly.Blocks['renderedBlock_' + blockId] = {
            init: function () {
                var input;
                if (getter) {
                    input = this.appendDummyInput();
                    this.setOutput(true, null);
                } else {
                    input = this.appendValueInput("NAME").appendField(CONF_TEXT_SET);
                    this.setPreviousStatement(true, null);
                    this.setNextStatement(true, null);
                }
                input.appendField(new Blockly.FieldDropdown([[ComponentName, 'OPTIONNAME']]), "NAME")
                    .appendField(".")
                    .appendField(new Blockly.FieldDropdown([[name, "OPTIONNAME"]]), "NAME2");
                this.setColour(getter ? COLOUR_GET : COLOUR_SET);
                if (!getter) {
                    input.appendField(' to ');
                }
            }
        };
    } else if (type == 'method') {
        var param = block['param'] || block['arg'] || [];
        var output = block['output'] === true;

        Blockly.Blocks['renderedBlock_' + blockId] = {
            init: function () {
                this.appendDummyInput().appendField(CONF_TEXT_CALL).appendField(new Blockly.FieldDropdown([[ComponentName, 'OPTIONNAME']]), 'COMPONENT_SELECTOR').appendField('.' + name);
                for (var i = 0; i < param.length; i++) {
                    this.appendValueInput('NAME').setAlign(Blockly.ALIGN_RIGHT).appendField(param[i]);
                }
                this.setInputsInline(false);
                if (output) {
                    this.setOutput(true, null);
                } else {
                    this.setPreviousStatement(true, null);
                    this.setNextStatement(true, null);
                }
                this.setColour(COLOUR_METHOD);
            }
        };
    }
    if (type == 'event') {
        renderEventBlock(blockId, block['param'].length || 0);
    } else {
        renderAndGetBlock(blockId, scale, margin_left, margin_top, margin_right, margin_bottom);
    }
    divElement.removeAttribute('not-rendered');


}

document.addEventListener("DOMContentLoaded", function (event) {
    allBlockDivs = document.getElementsByClassName('block');
    for (var i = 0; i < allBlockDivs.length; i++) {
        renderSingleBlockDiv(allBlockDivs[i]);
    }
});
