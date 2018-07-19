export class propertyResolver {debugger;
     static resolve(path: string, obj: any) {
      return path.split('.').reduce((prev, curr) => {
          return (prev ? prev[curr] : undefined);
      }, obj || self);
    }
}
