export function listToMap(list: any[], key: string) {
  const mapper: any = {};
  list.forEach(record => {
    mapper[record[key]] = record;
  });
  return mapper;
}
