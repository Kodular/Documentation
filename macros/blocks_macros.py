"""
    This file contains the macros for constructing a <div> for various types
    blocks used in the docs of Kodular.
"""

import mdx_macros
import urllib.parse
import json

class PropertyBlockMacro(mdx_macros.BaseMacro):
    """
    Returns the <div> containing information about a property block.
    Usage:
        - `[[PropertyBlock('Button', 'Visible', False)]]` - for a setter property
        - `[[PropertyBlock('Button', 'Visible', True)]]` - for a getter property

    """
    name = 'Property Block macro'
    key  = 'PropertyBlock'

    def handler(self, component_name, property_name, is_getter=False, *args, **kwargs):

        div = '<div class="block" ai2-block="property" not-rendered="true" value="{value}"></div>'
        value_dict = {"componentName": component_name,  "name": property_name, "getter": is_getter}
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
        pbm = PropertyBlockMacro(False, {}) # Dummy Macro
        getter = pbm.handler(component_name, property_name, True)
        setter = pbm.handler(component_name, property_name, False)

        # Extra <div> has been added to maintain a correct XML structure, because the markdown-macros parses the returned
        # string as XML
        return '<div>' + setter + '\n'+ getter + '</div>'
