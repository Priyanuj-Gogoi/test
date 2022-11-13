```bds
$nomention
Normal Text
true (bools)
[
]
;
%time%
$endif
$author[Hi;1]
$if[$isSlash==true]
    hi
$endif
```

### Normal Function
```bdjs
$authorID
```

### Comments
```bds
$c[This is a comment! $title <- Also, function inside comments doesn't get highlighted!]
```
>  I still need to Fucking fix this!!!

### Escape Characters
```
$nomention
$eval[%{DOL%username - \] - Text]
```
