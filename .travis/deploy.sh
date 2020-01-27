#!/bin/bash
set -e

git config user.name "Kodular Bot"
git config user.email "github@kodular.io"
git remote add gh-token "https://KodularCreator:${GH_TOKEN}@github.com/${TRAVIS_REPO_SLUG}.git"
git fetch gh-token && git fetch gh-token gh-pages:gh-pages
mkdocs gh-deploy -v --clean --remote-name gh-token
