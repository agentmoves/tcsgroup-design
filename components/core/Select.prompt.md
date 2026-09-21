**Select** — styled native dropdown, visually matched to Input.

```jsx
<Select label="Property Type"
  options={['Any', 'Condo', 'Single Family', 'Multi-Family', 'Land']} />
<Select label="Beds" options={[{value:'',label:'Any'},{value:'1',label:'1+'},{value:'2',label:'2+'}]} />
```

`options` accept strings or `{value,label}`. Same `size` scale as Input.
