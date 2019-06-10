[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?label=docs.kodular.io&style=for-the-badge)](https://docs.kodular.io) [![Travis (.com)](https://img.shields.io/travis/com/Kodular/Documentation.svg?style=for-the-badge&logo=travis)](https://travis-ci.com/Kodular/Documentation) [![Requires.io](https://img.shields.io/requires/github/Kodular/Documentation.svg?style=for-the-badge)](https://github.com/Kodular/Documentation/blob/master/requirements.txt) [![Codacy grade](https://img.shields.io/codacy/grade/23f3670699814e039eb585df4c60bb76.svg?style=for-the-badge&logo=codacy)](https://github.com/Kodular/Documentation)

---

# Kodular Docs


The documentation source for [Kodular](https://www.kodular.io) lives is here.

The documentation rendered using [MkDocs](https://www.mkdocs.org).
This uses the [Material theme](https://squidfunk.github.io/mkdocs-material) for MkDocs.

## Setting up
1. Make sure you have Python and `virtualenv` installed on your system.

2. Create a `virtualenv`
```
virtualenv kodular-docs-venv
```

3. Activate your `virtualenv`:
  - On Linux : `source kodular-docs-venv/bin/activate`
  - On Windows : `source kodular-docs-venv/Scripts/activate`

4. Install the dependencies using `pip`:
```
pip install -r requirements.txt
``` 

5. You can preview the docs locally using the command:
```
mkdocs serve
```

If you run into this error,
```
  MkDocs encountered as error parsing the configuration file: while constructing a Python object
  cannot find module 'macros.blocks_macros' (No module named 'macros.blocks_macros')
  in "/media/ghostfox/NewVolume1/documentation/mkdocs.yml", line 83, column 11
```
then make sure that the root directory of the repo is present in the PYTHONPATH 
`$ export PYTHONPATH=$PYTHONPATH:$PWD` (replace $PWD with the root directory of the repo)
