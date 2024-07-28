function onOpen() {
  DocumentApp.getUi().createAddonMenu()
    .addItem('Open Document Manager', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  const htmlOutput = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Document Manager')
    .setWidth(600);
  DocumentApp.getUi().showSidebar(htmlOutput);
}

function getDocumentContent(docId) {
  const doc = DocumentApp.openById(docId);
  return doc.getBody().getText();
}

function updateDocument(docId, newText) {
  const doc = DocumentApp.openById(docId);
  doc.getBody().setText(newText);
}

function getDocumentTitles() {
  const docs = DriveApp.getFilesByType(MimeType.GOOGLE_DOCS);
  const titles = [];
  
  while (docs.hasNext()) {
    const doc = docs.next();
    titles.push({id: doc.getId(), title: doc.getName()});
  }
  
  return titles;
}
