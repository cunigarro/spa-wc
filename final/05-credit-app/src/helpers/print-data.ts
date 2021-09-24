async function printLabelNames(mailAPI: any, thread: any) {
  const labels = await mailAPI.getLabels();

  for(const labelId of thread.labelIds) {
    console.log(labels.get(labelId).name);
  }
}
