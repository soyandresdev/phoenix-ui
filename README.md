

- Create the Lerna module
`lerna create @soyandresdev/phoenix-button --yes`
- Link lerna module to primary
`lerna add @soyandresdev/phoenix-button --scope=@soyandresdev/phoenix`
- Link lerna module to build
`lerna add rollup --scope=@soyandresdev/phoenix-builder`
- Install dependenci for lerna module
`lerna add react --dev --scope '{@soyandresdev/phoenix-button,@soyandresdev/phoenix-text}'`
- Add Build to Module
`lerna add @soyandresdev/phoenix-builder --dev --scope '{@soyandresdev/phoenix,@soyandresdev/phoenix-button,@soyandresdev/phoenix-text}'`

lerna add react --dev --scope '{@soyandresdev/phoenix-button,@soyandresdev/phoenix-text}'


lerna add @soyandresdev/phoenix-builder --dev --scope '{@soyandresdev/phoenix,@soyandresdev/phoenix-button,@soyandresdev/phoenix-theme}'

Bug
- Fixed Module export warning : https://g.yuque.com/zhangbao/weekly/day-124?language=en-us
- Error Expor module Type react https://stackoverflow.com/questions/50080893/rollup-error-isvalidelementtype-is-not-exported-by-node-modules-react-is-inde

