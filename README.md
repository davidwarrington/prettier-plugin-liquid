# Prettier Plugin Liquid

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
