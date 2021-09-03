# ember-resources-type-issue

Open `app/components/test-case.ts` and `tsconfig.json` to check this issue, you will notice that:

`strictFunctionTypes: true` will causes a type error when using ember-resources:

![image](https://user-images.githubusercontent.com/1104018/131962424-f0671756-0f62-400a-aa91-c08f517f7cfd.png)

`strictFunctionTypes: false` will fix this issue:

![image](https://user-images.githubusercontent.com/1104018/131962794-3a88d483-33f7-4874-a11c-3abcbc32c3aa.png)
