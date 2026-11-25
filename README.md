# Worst Fix Ever: Funniest Commit Message

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/nguyenhuong74/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/nguyenhuong74/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

An entry for the [Worst Fix Ever: Funniest Commit Message](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722) bounty on make.fun.

## The entry

One original commit-message line for a bug fix that made everything worse — a tiny cosmetic fix (a typo in the login error message) that backfires in the worst possible way:

> fix: typo in login error message; it now prints the password instead of the username

(84 characters, single line.)

## How it works

`main.ts` (Node 22+ stdlib only, no dependencies) validates the line — 1–100 characters, non-blank, single line — and writes it, plus a trailing newline, to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` outside the grader). Running it twice produces byte-identical output.

## Run it

```sh
node main.ts
# or, outside the grader:
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
