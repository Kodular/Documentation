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
