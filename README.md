

- Create the Lerna module
`lerna create @trackeer/phoenix-button --yes`
- Link lerna module to primary
`lerna add @trackeer/phoenix-button --scope=@trackeer/phoenix`
- Link lerna module to build
`lerna add rollup --scope=@trackeer/phoenix-builder`
- Install dependenci for lerna module
`lerna add react --dev --scope '{@trackeer/phoenix-button,@trackeer/phoenix-text}'`
- Add Build to Module
`lerna add @trackeer/phoenix-builder --dev --scope '{@trackeer/phoenix,@trackeer/phoenix-button,@trackeer/phoenix-text}'`

lerna add react --dev --scope '{@trackeer/phoenix-button,@trackeer/phoenix-text}'


lerna add @trackeer/phoenix-builder --dev --scope '{@trackeer/phoenix,@trackeer/phoenix-button,@trackeer/phoenix-theme}'

Bug
- Fixed Module export warning : https://g.yuque.com/zhangbao/weekly/day-124?language=en-us
- Error Expor module Type react https://stackoverflow.com/questions/50080893/rollup-error-isvalidelementtype-is-not-exported-by-node-modules-react-is-inde

