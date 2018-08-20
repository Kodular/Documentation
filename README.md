# Makeroid Docs

The documentation source for [Makeroid](www.makeroid.io) lives is here.

The documentation rendered using [MkDocs](www.mkdocs.org).
This uses the [Material theme](https://squidfunk.github.io/mkdocs-material) for MkDocs.

## Setting up
1. Make sure you have Python and `virtualenv` installed on your system.

2. Create a `virtualenv`
```
virtualenv makeroid-docs-venv
```

3. Activate your `virtualenv`:
  - On Linux : `source makeroid-docs-venv/bin/activate`
  - On Windows : `source makeroid-docs-venv/Scripts/activate`

4. Install the dependencies using `pip`:
```
pip install -r requirements.txt
``` 

5. You can preview the docs locally using the command:
```
mkdocs serve
```
