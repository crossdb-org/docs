# Build PDF
EXPORT_PDF=1 mkdocs build
mkdir -p download/pdf
mv site/pdf/document.pdf ../pdf/crossdb-$1.pdf

EXPORT_PDF=1 mkdocs build -f mkdocs-zh.yml
mkdir -p download/pdf
mv site/pdf/document.pdf ../pdf/crossdb-$1-zh.pdf

# Build HTML
mkdocs build
mkdocs build -f mkdocs-zh.yml -d site-zh
rm -rf site/zh
cp -af site-zh/zh site/
cp -af download site/
