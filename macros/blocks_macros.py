"""
    This file contains the macros for constructing a <div> for various types
    blocks used in the docs of Kodular.
"""

import mdx_macros
import urllib.parse
import json

class PropertyBlockSetterMacro(mdx_macros.BaseMacro):
    """
    Returns the <div> containing information about a Setter Property Block.
    Usage:
        - `[[PropertyBlockSetter('Button', 'Visible', False)]]` - for a setter property

    """
    name = 'Setter Property Block macro'
    key  = 'PropertyBlockSetter'

    def handler(self, component_name, property_name, *args, **kwargs):

        div = '<div class="block" ai2-block="property" not-rendered="true" value="{value}"></div>'
        value_dict = {"componentName": component_name,  "name": property_name, "getter": False}
        value_str = json.dumps(value_dict)
        quoted = urllib.parse.quote(value_str, safe='~@#$&()*!+=:;,.?/\''); # equivalent of encodeURI in JS

        return div.format(value=quoted)

class PropertyBlockGetterMacro(mdx_macros.BaseMacro):
    """
    Returns the <div> containing information about a getter property block.
    Usage:
        - `[[PropertyBlockGetter('Button', 'Visible']]` - for a property
    """

    name = 'Getter Property Block macro'
    key  = 'PropertyBlockGetter'

    def handler(self, component_name, property_name, *args, **kwargs):

        div = '<div class="block" ai2-block="property" not-rendered="true" value="{value}"></div>'
        value_dict = {"componentName": component_name,  "name": property_name, "getter": True}
        value_str = json.dumps(value_dict)
        quoted = urllib.parse.quote(value_str, safe='~@#$&()*!+=:;,.?/\''); # equivalent of encodeURI in JS

        return div.format(value=quoted)

class PropertyBlockGetAndSetMacro(mdx_macros.BaseMacro):
    """
        This macro is more of a shortcut to add both Setter and Getter Property blocks.
        Usage:
            - `[[PropertyBlockGetterAndSetter('Button', 'Visible')]]` - for a setter property

    """
    name = 'Property Block Shorthand macro'
    key  = 'PropertyBlockGetterAndSetter'

    def handler(self, component_name, property_name, *args, **kwargs):
        pbgm = PropertyBlockGetterMacro(False, {}) # Dummy Macro
        pbsm = PropertyBlockSetterMacro(False, {}) # Dummy Macro
        getter = pbgm.handler(component_name, property_name)
        setter = pbsm.handler(component_name, property_name)

        # Extra <div> has been added to maintain a correct XML structure, because the markdown-macros parses the returned
        # string as XML
        return '<div>' + setter + '\n'+ getter + '</div>'


class EventBlockMacro(mdx_macros.BaseMacro):
    """
    Returns the <div> containing information about a Component Event Block.
    Usage:
        Add the parameters of an event to the end of the macro call.
        - `[[Event('Button', 'On Click')]]` - for an event without parameters.
        - `[[Event('BottomNavigation', 'Item Selected', 'id', 'title')]]` - for an event with parameters.
    """

    name = 'Event Block macro'
    key  = 'Event'

    def handler(self, component_name, event_name, *params, **kwargs):

        div = '<div class="block" ai2-block="event" not-rendered="true" value="{value}"></div>'
        value_dict = {"componentName": component_name,  "name": event_name, "param": params}

        value_str = json.dumps(value_dict)
        quoted = urllib.parse.quote(value_str, safe='~@#$&()*!+=:;,.?/\''); # equivalent of encodeURI in JS

        return div.format(value=quoted)


class MethodBlockMacro(mdx_macros.BaseMacro):
    """
    Returns the <div> containing information about a Component's Method Block.
    Usage:
        [[Method('Component Name', 'Method Name', <has_return_value: Boolean>, params)]]

        Add the parameters of a method to the end of the macro call.
        - `[[Method('Button', 'Simulate Click', False)]]` - for an method with no return value and without parameters.
        - `[[Method('Device Utility', 'Copy', False, 'success Toast Message')]]` - for a  method with no return value and with parameters.
        - `[[Method('Color Utility', 'Get Luminance', True,  'color')]]` - for a method with return value and with parameters.
        - `[[Method('Device Utility', 'Is Emulator', True)]]` - for a method with return value and without parameters.

    """

    name = 'Method Block macro'
    key  = 'Method'

    def handler(self, component_name, method_name, has_return_value=False,*params, **kwargs):

        div = '<div class="block" ai2-block="method" not-rendered="true" value="{value}"></div>'
        value_dict = {"componentName": component_name,  "name": method_name, "param": params, "output": has_return_value}
        value_str = json.dumps(value_dict)
        quoted = urllib.parse.quote(value_str, safe='~@#$&()*!+=:;,.?/\''); # equivalent of encodeURI in JS

        return div.format(value=quoted)
