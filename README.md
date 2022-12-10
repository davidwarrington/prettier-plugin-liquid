# Prettier Plugin Liquid

**Status: Archived**

This project has long been abandoned. If you're looking for a Liquid formatter I encourage you to take a look at the highly configurable [Prettify](https://github.com/panoply/prettify) or the official [prettier-plugin-liquid](https://github.com/shopify/prettier-plugin-liquid) from Shopify.

## Rules
* ### Separate tokens with whitespace
    ```liquid
    {%-assign var = true | sort-%}
    {%-assign var=true | sort-%}
    {%-assign var=true| sort-%}
    {%-assign var=true|sort-%}

    becomes

    {%- assign var = true | sort-%}
    {%- assign var = true | sort -%}
    {%- assign var = true | sort -%}
    {%- assign var = true | sort -%}
    ```

* ### Split tags onto multiple lines
    If a tag has > 1 filter and the tag length surpasses the `printWidth` value, it will split by newlines per filter.

    ```liquid
    {%- assign variable = 'value' | append: ' ' | sort -%}
    {%- assign variable = 'value' | append: ' ' -%}
    {%- assign variable = 'value' -%}

    becomes

    {%-
        assign variable = 'value'
        | append: ' '
        | sort
    -%}
    {%- assign variable = 'value' | append: ' ' -%}
    {%- assign variable = 'value' -%}
    ````

## Notes
* This is not a feature complete plugin yet.
* Currently this plugin is only configurable with the built-in Prettier options. In other words, it should adhere to the `printWidth`, `tabWidth` and `useTabs` rules.
* No support `{% liquid %}` yet.
* No support for `prettier-ignore` comments yet.
