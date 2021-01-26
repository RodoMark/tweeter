let textArea = document.getElementById("tweet-text"),
  record = [];

// textArea.addEventListener("keydown", recordTextArea);

textArea.onkeyup = function (e) {
  let value = new String(textArea.value);
  if (record.length) {
    let prev = record[record.length - 1];
    let diff = value.length - prev.length;
    let newEntry = {
      length: value.length,
    };
    if (diff < 0) {
      newEntry.txtDiff = diff;
    } else {
      newEntry.txtDiff = value.substring(value.length - diff);
    }
    record.push(newEntry);
  } else {
    record.push({
      txtDiff: value,
      length: value.length,
    });
  }

  console.log(record[record.length - 1]);
};
