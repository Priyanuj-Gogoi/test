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
```bds
$authorID
```

### Comments
```bds
$c[This is a comment! $title <- Also, function inside comments doesn't get highlighted!]
```
>  I still need to Fucking fix this!!!

### Escape Characters
```bds
$nomention
$eval[%{DOL}%username - \] - Text]
```
