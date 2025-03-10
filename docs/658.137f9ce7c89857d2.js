'use strict';
(self.webpackChunkangular_material_components =
  self.webpackChunkangular_material_components || []).push([
  [658],
  {
    4135: (Z, P, g) => {
      g.d(P, {
        HF: () => ht,
        Uq: () => ct,
        gx: () => lt,
        vY: () => dt,
        yF: () => fe,
        G9: () => vt,
        m7: () => rt,
        Xg: () => He,
      });
      var s = g(8070),
        D = g(9129),
        t = g(963),
        x = g(5095),
        k = g(5299),
        S = g(8173);
      const E = new t.nKC('ngx-mat-date-formats');
      var M = g(6129);
      class w {
        constructor(c, o) {
          (this.start = c), (this.end = o);
        }
      }
      let f = (() => {
          var n;
          class c {
            constructor(e, a) {
              (this.selection = e),
                (this._adapter = a),
                (this._selectionChanged = new S.B()),
                (this.selectionChanged = this._selectionChanged),
                (this.selection = e);
            }
            updateSelection(e, a) {
              const i = this.selection;
              (this.selection = e),
                this._selectionChanged.next({ selection: e, source: a, oldValue: i });
            }
            ngOnDestroy() {
              this._selectionChanged.complete();
            }
            _isValidDateInstance(e) {
              return this._adapter.isDateInstance(e) && this._adapter.isValid(e);
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              t.QTQ();
            }),
            (n.ɵprov = t.jDH({ token: n, factory: n.ɵfac })),
            c
          );
        })(),
        F = (() => {
          var n;
          class c extends f {
            constructor(e) {
              super(null, e);
            }
            add(e) {
              super.updateSelection(e, this);
            }
            isValid() {
              return null != this.selection && this._isValidDateInstance(this.selection);
            }
            isComplete() {
              return null != this.selection;
            }
            clone() {
              const e = new c(this._adapter);
              return e.updateSelection(this.selection, this), e;
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(t.KVO(M.$));
            }),
            (n.ɵprov = t.jDH({ token: n, factory: n.ɵfac })),
            c
          );
        })();
      const U = {
        provide: f,
        deps: [[new t.Xx1(), new t.kdw(), f], M.$],
        useFactory: function Q(n, c) {
          return n || new F(c);
        },
      };
      function T(n) {
        return Error(
          'NgxMatDatetimePicker: No provider found for '.concat(
            n,
            '. You must import one of the following ',
          ) +
            'modules at your application root: NgxMatNativeDateModule, NgxMatMomentDateModule, or provide a custom implementation.',
        );
      }
      new t.Xx1(), new t.kdw();
      var p = g(1294),
        B = g(1900),
        L = g(4437),
        m = g(1206),
        v = g(1731),
        _ = g(3622);
      const d = ['ngx-mat-calendar-body', ''];
      function l(n, c) {
        if ((1 & n && (t.j41(0, 'tr', 0)(1, 'td', 3), t.EFF(2), t.k0s()()), 2 & n)) {
          const o = t.XpG();
          t.R7$(),
            t.xc7('padding-top', o._cellPadding())('padding-bottom', o._cellPadding()),
            t.BMQ('colspan', o.numCols()),
            t.R7$(),
            t.SpI(' ', o.label(), ' ');
        }
      }
      function b(n, c) {
        if ((1 & n && (t.j41(0, 'td', 3), t.EFF(1), t.k0s()), 2 & n)) {
          const o = t.XpG(2);
          t.xc7('padding-top', o._cellPadding())('padding-bottom', o._cellPadding()),
            t.BMQ('colspan', o._firstRowOffset()),
            t.R7$(),
            t.SpI(' ', o._firstRowOffset() >= o.labelMinRequiredCells() ? o.label() : '', ' ');
        }
      }
      function C(n, c) {
        if (1 & n) {
          const o = t.RV6();
          t.j41(0, 'td', 6)(1, 'button', 7),
            t.bIt('click', function (a) {
              const i = t.eBV(o).$implicit,
                r = t.XpG(2);
              return t.Njj(r._cellClicked(i, a));
            })('focus', function (a) {
              const i = t.eBV(o).$implicit,
                r = t.XpG(2);
              return t.Njj(r._emitActiveDateChange(i, a));
            }),
            t.j41(2, 'span', 8),
            t.EFF(3),
            t.k0s(),
            t.nrm(4, 'span', 9),
            t.k0s()();
        }
        if (2 & n) {
          const o = c.$implicit,
            e = c.$index,
            a = t.XpG().$index,
            i = t.XpG();
          t.xc7('width', i._cellWidth())('padding-top', i._cellPadding())(
            'padding-bottom',
            i._cellPadding(),
          ),
            t.BMQ('data-mat-row', a)('data-mat-col', e),
            t.R7$(),
            t.AVh('mat-calendar-body-disabled', !o.enabled)(
              'mat-calendar-body-active',
              i._isActiveCell(a, e),
            )('mat-calendar-body-range-start', i._isRangeStart(o.compareValue))(
              'mat-calendar-body-range-end',
              i._isRangeEnd(o.compareValue),
            )('mat-calendar-body-in-range', i._isInRange(o.compareValue))(
              'mat-calendar-body-comparison-bridge-start',
              i._isComparisonBridgeStart(o.compareValue, a, e),
            )(
              'mat-calendar-body-comparison-bridge-end',
              i._isComparisonBridgeEnd(o.compareValue, a, e),
            )('mat-calendar-body-comparison-start', i._isComparisonStart(o.compareValue))(
              'mat-calendar-body-comparison-end',
              i._isComparisonEnd(o.compareValue),
            )('mat-calendar-body-in-comparison-range', i._isInComparisonRange(o.compareValue))(
              'mat-calendar-body-preview-start',
              i._isPreviewStart(o.compareValue),
            )('mat-calendar-body-preview-end', i._isPreviewEnd(o.compareValue))(
              'mat-calendar-body-in-preview',
              i._isInPreview(o.compareValue),
            ),
            t.Y8G('ngClass', o.cssClasses)('tabindex', i._isActiveCell(a, e) ? 0 : -1),
            t.BMQ('aria-label', o.ariaLabel)('aria-disabled', !o.enabled || null)(
              'aria-pressed',
              i._isSelected(o.compareValue),
            )('aria-current', i.todayValue() === o.compareValue ? 'date' : null)(
              'aria-describedby',
              i._getDescribedby(o.compareValue),
            ),
            t.R7$(),
            t.AVh('mat-calendar-body-selected', i._isSelected(o.compareValue))(
              'mat-calendar-body-comparison-identical',
              i._isComparisonIdentical(o.compareValue),
            )('mat-calendar-body-today', i.todayValue() === o.compareValue),
            t.R7$(),
            t.SpI(' ', o.displayValue, ' ');
        }
      }
      function V(n, c) {
        if (
          (1 & n &&
            (t.j41(0, 'tr', 1),
            t.DNE(1, b, 2, 6, 'td', 4),
            t.Z7z(2, C, 5, 48, 'td', 5, t.Vm6),
            t.k0s()),
          2 & n)
        ) {
          const o = c.$implicit,
            e = c.$index,
            a = t.XpG();
          t.R7$(), t.vxM(0 === e && a._firstRowOffset() ? 1 : -1), t.R7$(), t.Dyx(o);
        }
      }
      class A {
        constructor(c, o, e, a, i = {}, r = c, h) {
          (this.value = c),
            (this.displayValue = o),
            (this.ariaLabel = e),
            (this.enabled = a),
            (this.cssClasses = i),
            (this.compareValue = r),
            (this.rawValue = h);
        }
      }
      let Ae = 1,
        O = (() => {
          var n;
          class c {
            ngAfterViewChecked() {
              this._focusActiveCellAfterViewChecked &&
                (this._focusActiveCell(), (this._focusActiveCellAfterViewChecked = !1));
            }
            constructor(e, a) {
              (this._elementRef = e),
                (this._ngZone = a),
                (this._platform = (0, t.WQX)(m.OD)),
                (this._focusActiveCellAfterViewChecked = !1),
                (this.label = (0, t.hFB)()),
                (this.rows = (0, t.hFB)()),
                (this.todayValue = (0, t.hFB)()),
                (this.startValue = (0, t.hFB)()),
                (this.endValue = (0, t.hFB)()),
                (this.labelMinRequiredCells = (0, t.hFB)()),
                (this.numCols = (0, t.hFB)(7)),
                (this.activeCell = (0, t.hFB)(0)),
                (this.isRange = (0, t.hFB)(!1)),
                (this.cellAspectRatio = (0, t.hFB)(1)),
                (this.comparisonStart = (0, t.hFB)()),
                (this.comparisonEnd = (0, t.hFB)()),
                (this.previewStart = (0, t.hFB)(null)),
                (this.previewEnd = (0, t.hFB)(null)),
                (this.startDateAccessibleName = (0, t.hFB)()),
                (this.endDateAccessibleName = (0, t.hFB)()),
                (this.selectedValueChange = (0, t.CGW)()),
                (this.previewChange = (0, t.CGW)()),
                (this.activeDateChange = (0, t.CGW)()),
                (this.dragStarted = (0, t.CGW)()),
                (this.dragEnded = (0, t.CGW)()),
                (this._firstRowOffset = (0, t.EWP)(() => {
                  const i = this.rows(),
                    r = this.numCols();
                  return i && i.length && i[0].length ? r - i[0].length : 0;
                })),
                (this._cellPadding = (0, t.EWP)(() => {
                  const i = this.numCols(),
                    r = this.cellAspectRatio();
                  return ''.concat((50 * r) / i, '%');
                })),
                (this._cellWidth = (0, t.EWP)(() => ''.concat(100 / this.numCols(), '%'))),
                (this._didDragSinceMouseDown = !1),
                (this._enterHandler = (i) => {
                  if (this._skipNextFocus && 'focus' === i.type) this._skipNextFocus = !1;
                  else if (i.target && this.isRange()) {
                    const r = this._getCellFromElement(i.target);
                    r &&
                      this._ngZone.run(() =>
                        this.previewChange.emit({ value: r.enabled ? r : null, event: i }),
                      );
                  }
                }),
                (this._touchmoveHandler = (i) => {
                  if (!this.isRange()) return;
                  const r = ve(i),
                    h = r ? this._getCellFromElement(r) : null;
                  r !== i.target && (this._didDragSinceMouseDown = !0),
                    oe(i.target) && i.preventDefault(),
                    this._ngZone.run(() =>
                      this.previewChange.emit({
                        value: null != h && h.enabled ? h : null,
                        event: i,
                      }),
                    );
                }),
                (this._leaveHandler = (i) => {
                  null !== this.previewEnd() &&
                    this.isRange() &&
                    ('blur' !== i.type && (this._didDragSinceMouseDown = !0),
                    i.target &&
                      this._getCellFromElement(i.target) &&
                      (!i.relatedTarget || !this._getCellFromElement(i.relatedTarget)) &&
                      this._ngZone.run(() => this.previewChange.emit({ value: null, event: i })));
                }),
                (this._mousedownHandler = (i) => {
                  if (!this.isRange()) return;
                  this._didDragSinceMouseDown = !1;
                  const r = i.target && this._getCellFromElement(i.target);
                  !r ||
                    !this._isInRange(r.rawValue) ||
                    this._ngZone.run(() => {
                      this.dragStarted.emit({ value: r.rawValue, event: i });
                    });
                }),
                (this._mouseupHandler = (i) => {
                  if (!this.isRange()) return;
                  const r = oe(i.target);
                  r
                    ? r.closest('.mat-calendar-body') === this._elementRef.nativeElement &&
                      this._ngZone.run(() => {
                        var h;
                        const u = this._getCellFromElement(r);
                        this.dragEnded.emit({
                          value:
                            null !== (h = null == u ? void 0 : u.rawValue) && void 0 !== h
                              ? h
                              : null,
                          event: i,
                        });
                      })
                    : this._ngZone.run(() => {
                        this.dragEnded.emit({ value: null, event: i });
                      });
                }),
                (this._touchendHandler = (i) => {
                  const r = ve(i);
                  r && this._mouseupHandler({ target: r });
                }),
                (this._id = 'mat-calendar-body-'.concat(Ae++)),
                (this._startDateLabelId = ''.concat(this._id, '-start-date')),
                (this._endDateLabelId = ''.concat(this._id, '-end-date')),
                a.runOutsideAngular(() => {
                  const i = e.nativeElement;
                  i.addEventListener('mouseenter', this._enterHandler, !0),
                    i.addEventListener('touchmove', this._touchmoveHandler, !0),
                    i.addEventListener('focus', this._enterHandler, !0),
                    i.addEventListener('mouseleave', this._leaveHandler, !0),
                    i.addEventListener('blur', this._leaveHandler, !0),
                    i.addEventListener('mousedown', this._mousedownHandler),
                    i.addEventListener('touchstart', this._mousedownHandler),
                    this._platform.isBrowser &&
                      (window.addEventListener('mouseup', this._mouseupHandler),
                      window.addEventListener('touchend', this._touchendHandler));
                });
            }
            _cellClicked(e, a) {
              this._didDragSinceMouseDown ||
                (e.enabled && this.selectedValueChange.emit({ value: e.value, event: a }));
            }
            _emitActiveDateChange(e, a) {
              e.enabled && this.activeDateChange.emit({ value: e.value, event: a });
            }
            _isSelected(e) {
              return this.startValue() === e || this.endValue() === e;
            }
            ngOnDestroy() {
              const e = this._elementRef.nativeElement;
              e.removeEventListener('mouseenter', this._enterHandler, !0),
                e.removeEventListener('touchmove', this._touchmoveHandler, !0),
                e.removeEventListener('focus', this._enterHandler, !0),
                e.removeEventListener('mouseleave', this._leaveHandler, !0),
                e.removeEventListener('blur', this._leaveHandler, !0),
                e.removeEventListener('mousedown', this._mousedownHandler),
                e.removeEventListener('touchstart', this._mousedownHandler),
                this._platform.isBrowser &&
                  (window.removeEventListener('mouseup', this._mouseupHandler),
                  window.removeEventListener('touchend', this._touchendHandler));
            }
            _isActiveCell(e, a) {
              let i = e * this.numCols() + a;
              return e && (i -= this._firstRowOffset()), i == this.activeCell();
            }
            _focusActiveCell(e = !0) {
              this._ngZone.runOutsideAngular(() => {
                this._ngZone.onStable.pipe((0, _.s)(1)).subscribe(() => {
                  setTimeout(() => {
                    const a = this._elementRef.nativeElement.querySelector(
                      '.mat-calendar-body-active',
                    );
                    a && (e || (this._skipNextFocus = !0), a.focus());
                  });
                });
              });
            }
            _scheduleFocusActiveCellAfterViewChecked() {
              this._focusActiveCellAfterViewChecked = !0;
            }
            _isRangeStart(e) {
              return ce(e, this.startValue(), this.endValue());
            }
            _isRangeEnd(e) {
              return de(e, this.startValue(), this.endValue());
            }
            _isInRange(e) {
              return le(e, this.startValue(), this.endValue(), this.isRange());
            }
            _isComparisonStart(e) {
              return ce(e, this.comparisonStart(), this.comparisonEnd());
            }
            _isComparisonBridgeStart(e, a, i) {
              if (!this._isComparisonStart(e) || this._isRangeStart(e) || !this._isInRange(e))
                return !1;
              let r = this.rows()[a][i - 1];
              if (!r) {
                const h = this.rows()[a - 1];
                r = h && h[h.length - 1];
              }
              return r && !this._isRangeEnd(r.compareValue);
            }
            _isComparisonBridgeEnd(e, a, i) {
              if (!this._isComparisonEnd(e) || this._isRangeEnd(e) || !this._isInRange(e))
                return !1;
              let r = this.rows()[a][i + 1];
              if (!r) {
                const h = this.rows()[a + 1];
                r = h && h[0];
              }
              return r && !this._isRangeStart(r.compareValue);
            }
            _isComparisonEnd(e) {
              return de(e, this.comparisonStart(), this.comparisonEnd());
            }
            _isInComparisonRange(e) {
              return le(e, this.comparisonStart(), this.comparisonEnd(), this.isRange());
            }
            _isComparisonIdentical(e) {
              return (
                this.comparisonStart() === this.comparisonEnd() && e === this.comparisonStart()
              );
            }
            _isPreviewStart(e) {
              return ce(e, this.previewStart(), this.previewEnd());
            }
            _isPreviewEnd(e) {
              return de(e, this.previewStart(), this.previewEnd());
            }
            _isInPreview(e) {
              return le(e, this.previewStart(), this.previewEnd(), this.isRange());
            }
            _getDescribedby(e) {
              return this.isRange()
                ? this.startValue() === e && this.endValue() === e
                  ? ''.concat(this._startDateLabelId, ' ').concat(this._endDateLabelId)
                  : this.startValue() === e
                    ? this._startDateLabelId
                    : this.endValue() === e
                      ? this._endDateLabelId
                      : null
                : null;
            }
            _getCellFromElement(e) {
              const a = oe(e);
              if (a) {
                const i = a.getAttribute('data-mat-row'),
                  r = a.getAttribute('data-mat-col');
                if (i && r) return this.rows()[parseInt(i)][parseInt(r)];
              }
              return null;
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(t.rXU(t.aKT), t.rXU(t.SKi));
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [['', 'ngx-mat-calendar-body', '']],
              hostAttrs: [1, 'ngx-mat-calendar-body'],
              inputs: {
                label: [1, 'label'],
                rows: [1, 'rows'],
                todayValue: [1, 'todayValue'],
                startValue: [1, 'startValue'],
                endValue: [1, 'endValue'],
                labelMinRequiredCells: [1, 'labelMinRequiredCells'],
                numCols: [1, 'numCols'],
                activeCell: [1, 'activeCell'],
                isRange: [1, 'isRange'],
                cellAspectRatio: [1, 'cellAspectRatio'],
                comparisonStart: [1, 'comparisonStart'],
                comparisonEnd: [1, 'comparisonEnd'],
                previewStart: [1, 'previewStart'],
                previewEnd: [1, 'previewEnd'],
                startDateAccessibleName: [1, 'startDateAccessibleName'],
                endDateAccessibleName: [1, 'endDateAccessibleName'],
              },
              outputs: {
                selectedValueChange: 'selectedValueChange',
                previewChange: 'previewChange',
                activeDateChange: 'activeDateChange',
                dragStarted: 'dragStarted',
                dragEnded: 'dragEnded',
              },
              exportAs: ['matCalendarBody'],
              attrs: d,
              decls: 7,
              vars: 5,
              consts: [
                ['aria-hidden', 'true'],
                ['role', 'row'],
                [1, 'mat-calendar-body-hidden-label', 3, 'id'],
                [1, 'mat-calendar-body-label'],
                [1, 'mat-calendar-body-label', 3, 'paddingTop', 'paddingBottom'],
                [
                  'role',
                  'gridcell',
                  1,
                  'mat-calendar-body-cell-container',
                  3,
                  'width',
                  'paddingTop',
                  'paddingBottom',
                ],
                ['role', 'gridcell', 1, 'mat-calendar-body-cell-container'],
                [
                  'type',
                  'button',
                  1,
                  'mat-calendar-body-cell',
                  3,
                  'click',
                  'focus',
                  'ngClass',
                  'tabindex',
                ],
                [1, 'mat-calendar-body-cell-content', 'mat-focus-indicator'],
                ['aria-hidden', 'true', 1, 'mat-calendar-body-cell-preview'],
              ],
              template: function (e, a) {
                1 & e &&
                  (t.DNE(0, l, 3, 6, 'tr', 0),
                  t.Z7z(1, V, 4, 1, 'tr', 1, t.Vm6),
                  t.j41(3, 'label', 2),
                  t.EFF(4),
                  t.k0s(),
                  t.j41(5, 'label', 2),
                  t.EFF(6),
                  t.k0s()),
                  2 & e &&
                    (t.vxM(a._firstRowOffset() < a.labelMinRequiredCells() ? 0 : -1),
                    t.R7$(),
                    t.Dyx(a.rows()),
                    t.R7$(2),
                    t.Y8G('id', a._startDateLabelId),
                    t.R7$(),
                    t.SpI(' ', a.startDateAccessibleName(), '\n'),
                    t.R7$(),
                    t.Y8G('id', a._endDateLabelId),
                    t.R7$(),
                    t.SpI(' ', a.endDateAccessibleName(), '\n'));
              },
              dependencies: [v.YU],
              styles: [
                '.mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;padding-left:4.7142857143%;padding-right:4.7142857143%;text-align:start;font-size:var(--mat-datepicker-calendar-body-label-text-size);font-weight:var(--mat-datepicker-calendar-body-label-text-weight);color:var(--mat-datepicker-calendar-body-label-text-color)}.mat-calendar-body-hidden-label{display:none}.mat-calendar-body-cell-container{position:relative;height:0;line-height:0}.mat-calendar-body-cell-container .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){background-color:var(--mat-datepicker-calendar-date-hover-state-background-color)}.mat-calendar-body-cell{-webkit-user-select:none;user-select:none;cursor:pointer;border:none;-webkit-tap-highlight-color:transparent;position:absolute;top:0;left:0;width:100%;height:100%;background:none;text-align:center;outline:none;font-family:inherit;margin:0}.mat-calendar-body-cell::-moz-focus-inner{border:0}.mat-calendar-body-cell:before,.mat-calendar-body-cell:after,.mat-calendar-body-cell-preview{content:"";position:absolute;top:5%;left:0;z-index:0;box-sizing:border-box;display:block;height:90%;width:100%}.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before,.mat-calendar-body-range-start:after,.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,.mat-calendar-body-comparison-start:after,.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:5%;width:95%;border-top-left-radius:999px;border-bottom-left-radius:999px}[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range):before,[dir=rtl] .mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start):before,[dir=rtl] .mat-calendar-body-comparison-start:after,[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{left:0;border-radius:0 999px 999px 0}.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before,.mat-calendar-body-range-end:after,.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,.mat-calendar-body-comparison-end:after,.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range):before,[dir=rtl] .mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end):before,[dir=rtl] .mat-calendar-body-comparison-end:after,[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{left:5%;border-radius:999px 0 0 999px}[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start:after{width:95%;border-top-right-radius:999px;border-bottom-right-radius:999px}.mat-calendar-body-comparison-start.mat-calendar-body-range-end:after,[dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end:after,.mat-calendar-body-comparison-end.mat-calendar-body-range-start:after,[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start:after{width:90%}.mat-calendar-body-in-preview .mat-calendar-body-cell-preview{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview{border-left:0;border-right:dashed 1px}.mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview{border-right:0;border-left:dashed 1px}.mat-calendar-body-disabled{cursor:default}@media (forced-colors: active){.mat-calendar-body-disabled{opacity:.5}}.mat-calendar-body-cell-content{top:5%;left:5%;z-index:1;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px;border-color:var(--mat-datepicker-calendar-date-outline-color)}.mat-calendar-body-cell-content.mat-calendar-body-selected{background-color:var(--mat-datepicker-calendar-date-selected-state-background-color);color:var(--mat-datepicker-calendar-date-selected-state-text-color)}.mat-calendar-body-cell-content.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical){border-color:var(--mat-datepicker-calendar-date-today-outline-color)}.mat-calendar-body-cell-content.mat-focus-indicator{position:absolute}@media (forced-colors: active){.mat-calendar-body-cell-content{border:none}}@media (forced-colors: active){.mat-datepicker-popup:not(:empty),.mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected{outline:solid 1px}.mat-calendar-body-today{outline:dotted 1px}.mat-calendar-body-cell:before,.mat-calendar-body-cell:after,.mat-calendar-body-selected{background:none}.mat-calendar-body-in-range:before,.mat-calendar-body-comparison-bridge-start:before,.mat-calendar-body-comparison-bridge-end:before{border-top:solid 1px;border-bottom:solid 1px}.mat-calendar-body-range-start:before{border-left:solid 1px}[dir=rtl] .mat-calendar-body-range-start:before{border-left:0;border-right:solid 1px}.mat-calendar-body-range-end:before{border-right:solid 1px}[dir=rtl] .mat-calendar-body-range-end:before{border-right:0;border-left:solid 1px}.mat-calendar-body-in-comparison-range:before{border-top:dashed 1px;border-bottom:dashed 1px}.mat-calendar-body-comparison-start:before{border-left:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-start:before{border-left:0;border-right:dashed 1px}.mat-calendar-body-comparison-end:before{border-right:dashed 1px}[dir=rtl] .mat-calendar-body-comparison-end:before{border-right:0;border-left:dashed 1px}}[dir=rtl] .mat-calendar-body-label{text-align:right}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            c
          );
        })();
      function se(n) {
        return 'TD' === (null == n ? void 0 : n.nodeName);
      }
      function oe(n) {
        var c, o;
        let e;
        return (
          se(n)
            ? (e = n)
            : se(n.parentNode)
              ? (e = n.parentNode)
              : se(null === (c = n.parentNode) || void 0 === c ? void 0 : c.parentNode) &&
                (e = n.parentNode.parentNode),
          null != (null === (o = e) || void 0 === o ? void 0 : o.getAttribute('data-mat-row'))
            ? e
            : null
        );
      }
      function ce(n, c, o) {
        return null !== o && c !== o && n < o && n === c;
      }
      function de(n, c, o) {
        return null !== c && c !== o && n >= c && n === o;
      }
      function le(n, c, o, e) {
        return e && null !== c && null !== o && c !== o && n >= c && n <= o;
      }
      function ve(n) {
        const c = n.changedTouches[0];
        return document.elementFromPoint(c.clientX, c.clientY);
      }
      const J = new t.nKC('NGX_MAT_DATE_RANGE_SELECTION_STRATEGY');
      new t.Xx1(), new t.kdw();
      var ee = g(1909);
      function Ie(n, c) {
        if (
          (1 & n &&
            (t.j41(0, 'th', 2)(1, 'span', 5),
            t.EFF(2),
            t.k0s(),
            t.j41(3, 'span', 6),
            t.EFF(4),
            t.k0s()()),
          2 & n)
        ) {
          const o = c.$implicit;
          t.R7$(2), t.JRh(o.long), t.R7$(2), t.JRh(o.narrow);
        }
      }
      let _e = (() => {
        var n;
        class c {
          get activeDate() {
            return this._activeDate;
          }
          set activeDate(e) {
            const a = this._activeDate,
              i =
                this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)) ||
                this._dateAdapter.today();
            (this._activeDate = this._dateAdapter.clampDate(i, this.minDate, this.maxDate)),
              this._hasSameMonthAndYear(a, this._activeDate) || this._init();
          }
          get selected() {
            return this._selected;
          }
          set selected(e) {
            (this._selected =
              e instanceof w
                ? e
                : this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))),
              this._setRanges(this._selected);
          }
          get minDate() {
            return this._minDate;
          }
          set minDate(e) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));
          }
          get maxDate() {
            return this._maxDate;
          }
          set maxDate(e) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));
          }
          constructor(e, a, i, r, h) {
            if (
              ((this._changeDetectorRef = e),
              (this._dateFormats = a),
              (this._dateAdapter = i),
              (this._dir = r),
              (this._rangeStrategy = h),
              (this._rerenderSubscription = B.yU.EMPTY),
              (this.dateFilter = (0, t.hFB)()),
              (this.dateClass = (0, t.hFB)()),
              (this.comparisonStart = (0, t.hFB)()),
              (this.comparisonEnd = (0, t.hFB)()),
              (this.startDateAccessibleName = (0, t.hFB)()),
              (this.endDateAccessibleName = (0, t.hFB)()),
              (this.activeDrag = (0, t.hFB)(null)),
              (this.selectedChange = (0, t.CGW)()),
              (this._userSelection = (0, t.CGW)()),
              (this.dragStarted = (0, t.CGW)()),
              (this.dragEnded = (0, t.CGW)()),
              (this.activeDateChange = (0, t.CGW)()),
              (this._matCalendarBody = (0, t.ebz)(O)),
              !this._dateAdapter)
            )
              throw T('DateAdapter');
            if (!this._dateFormats) throw T('MAT_DATE_FORMATS');
            this._activeDate = this._dateAdapter.today();
          }
          ngAfterContentInit() {
            this._rerenderSubscription = this._dateAdapter.localeChanges
              .pipe((0, L.Z)(null))
              .subscribe(() => this._init());
          }
          ngOnChanges(e) {
            const a = e.comparisonStart || e.comparisonEnd;
            a && !a.firstChange && this._setRanges(this.selected),
              e.activeDrag && !this.activeDrag() && this._clearPreview();
          }
          ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          _dateSelected(e) {
            const a = e.value,
              i = this._getDateFromDayOfMonth(a);
            let r, h;
            this._selected instanceof w
              ? ((r = this._getDateInCurrentMonth(this._selected.start)),
                (h = this._getDateInCurrentMonth(this._selected.end)))
              : (r = h = this._getDateInCurrentMonth(this._selected)),
              (r !== a || h !== a) && this.selectedChange.emit(i),
              this._userSelection.emit({ value: i, event: e.event }),
              this._clearPreview(),
              this._changeDetectorRef.markForCheck();
          }
          _updateActiveDate(e) {
            const i = this._activeDate;
            (this.activeDate = this._getDateFromDayOfMonth(e.value)),
              this._dateAdapter.compareDate(i, this.activeDate) &&
                this.activeDateChange.emit(this._activeDate);
          }
          _handleCalendarBodyKeydown(e) {
            const a = this._activeDate,
              i = this._isRtl();
            switch (e.keyCode) {
              case p.UQ:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, i ? 1 : -1);
                break;
              case p.LE:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, i ? -1 : 1);
                break;
              case p.i7:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
                break;
              case p.n6:
                this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
                break;
              case p.yZ:
                this.activeDate = this._dateAdapter.addCalendarDays(
                  this._activeDate,
                  1 - this._dateAdapter.getDate(this._activeDate),
                );
                break;
              case p.Kp:
                this.activeDate = this._dateAdapter.addCalendarDays(
                  this._activeDate,
                  this._dateAdapter.getNumDaysInMonth(this._activeDate) -
                    this._dateAdapter.getDate(this._activeDate),
                );
                break;
              case p.w_:
                this.activeDate = e.altKey
                  ? this._dateAdapter.addCalendarYears(this._activeDate, -1)
                  : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
                break;
              case p.dB:
                this.activeDate = e.altKey
                  ? this._dateAdapter.addCalendarYears(this._activeDate, 1)
                  : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
                break;
              case p.Fm:
              case p.t6:
                return (
                  (this._selectionKeyPressed = !0),
                  void (this._canSelect(this._activeDate) && e.preventDefault())
                );
              case p._f:
                return void (
                  null != this._previewEnd &&
                  !(0, p.rp)(e) &&
                  (this._clearPreview(),
                  this.activeDrag()
                    ? this.dragEnded.emit({ value: null, event: e })
                    : (this.selectedChange.emit(null),
                      this._userSelection.emit({ value: null, event: e })),
                  e.preventDefault(),
                  e.stopPropagation())
                );
              default:
                return;
            }
            this._dateAdapter.compareDate(a, this.activeDate) &&
              (this.activeDateChange.emit(this.activeDate),
              this._focusActiveCellAfterViewChecked()),
              e.preventDefault();
          }
          _handleCalendarBodyKeyup(e) {
            (e.keyCode === p.t6 || e.keyCode === p.Fm) &&
              (this._selectionKeyPressed &&
                this._canSelect(this._activeDate) &&
                this._dateSelected({
                  value: this._dateAdapter.getDate(this._activeDate),
                  event: e,
                }),
              (this._selectionKeyPressed = !1));
          }
          _init() {
            this._setRanges(this.selected),
              (this._todayDate = this._getCellCompareValue(this._dateAdapter.today())),
              (this._monthLabel = this._dateFormats.display.monthLabel
                ? this._dateAdapter.format(this.activeDate, this._dateFormats.display.monthLabel)
                : this._dateAdapter
                    .getMonthNames('short')
                    [this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());
            let e = this._dateAdapter.createDate(
              this._dateAdapter.getYear(this.activeDate),
              this._dateAdapter.getMonth(this.activeDate),
              1,
            );
            (this._firstWeekOffset =
              (7 + this._dateAdapter.getDayOfWeek(e) - this._dateAdapter.getFirstDayOfWeek()) % 7),
              this._initWeekdays(),
              this._createWeekCells(),
              this._changeDetectorRef.markForCheck();
          }
          _focusActiveCell(e) {
            this._matCalendarBody()._focusActiveCell(e);
          }
          _focusActiveCellAfterViewChecked() {
            this._matCalendarBody()._scheduleFocusActiveCellAfterViewChecked();
          }
          _previewChanged({ event: e, value: a }) {
            if (this._rangeStrategy) {
              const h = a ? a.rawValue : null,
                u = this._rangeStrategy.createPreview(h, this.selected, e);
              if (
                ((this._previewStart = this._getCellCompareValue(u.start)),
                (this._previewEnd = this._getCellCompareValue(u.end)),
                this.activeDrag() && h)
              ) {
                var i, r;
                const I =
                  null === (i = (r = this._rangeStrategy).createDrag) || void 0 === i
                    ? void 0
                    : i.call(r, this.activeDrag().value, this.selected, h, e);
                I &&
                  ((this._previewStart = this._getCellCompareValue(I.start)),
                  (this._previewEnd = this._getCellCompareValue(I.end)));
              }
              this._changeDetectorRef.detectChanges();
            }
          }
          _dragEnded(e) {
            if (this.activeDrag())
              if (e.value) {
                var a, i;
                const r =
                  null === (a = this._rangeStrategy) ||
                  void 0 === a ||
                  null === (i = a.createDrag) ||
                  void 0 === i
                    ? void 0
                    : i.call(a, this.activeDrag().value, this.selected, e.value, e.event);
                this.dragEnded.emit({ value: null != r ? r : null, event: e.event });
              } else this.dragEnded.emit({ value: null, event: e.event });
          }
          _getDateFromDayOfMonth(e) {
            return this._dateAdapter.createDate(
              this._dateAdapter.getYear(this.activeDate),
              this._dateAdapter.getMonth(this.activeDate),
              e,
            );
          }
          _initWeekdays() {
            const e = this._dateAdapter.getFirstDayOfWeek(),
              a = this._dateAdapter.getDayOfWeekNames('narrow');
            let r = this._dateAdapter
              .getDayOfWeekNames('long')
              .map((h, u) => ({ long: h, narrow: a[u] }));
            this._weekdays = r.slice(e).concat(r.slice(0, e));
          }
          _createWeekCells() {
            const e = this._dateAdapter.getNumDaysInMonth(this.activeDate),
              a = this._dateAdapter.getDateNames();
            this._weeks = [[]];
            for (let i = 0, r = this._firstWeekOffset; i < e; i++, r++) {
              7 == r && (this._weeks.push([]), (r = 0));
              const h = this._dateAdapter.createDate(
                  this._dateAdapter.getYear(this.activeDate),
                  this._dateAdapter.getMonth(this.activeDate),
                  i + 1,
                ),
                u = this._shouldEnableDate(h),
                I = this._dateAdapter.format(h, this._dateFormats.display.dateA11yLabel),
                Y = this.dateClass() ? this.dateClass()(h, 'month') : void 0;
              this._weeks[this._weeks.length - 1].push(
                new A(i + 1, a[i], I, u, Y, this._getCellCompareValue(h), h),
              );
            }
          }
          _shouldEnableDate(e) {
            return (
              !!e &&
              (!this.minDate || this._dateAdapter.compareDate(e, this.minDate) >= 0) &&
              (!this.maxDate || this._dateAdapter.compareDate(e, this.maxDate) <= 0) &&
              (!this.dateFilter() || this.dateFilter()(e))
            );
          }
          _getDateInCurrentMonth(e) {
            return e && this._hasSameMonthAndYear(e, this.activeDate)
              ? this._dateAdapter.getDate(e)
              : null;
          }
          _hasSameMonthAndYear(e, a) {
            return !(
              !e ||
              !a ||
              this._dateAdapter.getMonth(e) != this._dateAdapter.getMonth(a) ||
              this._dateAdapter.getYear(e) != this._dateAdapter.getYear(a)
            );
          }
          _getCellCompareValue(e) {
            if (e) {
              const a = this._dateAdapter.getYear(e),
                i = this._dateAdapter.getMonth(e),
                r = this._dateAdapter.getDate(e);
              return new Date(a, i, r).getTime();
            }
            return null;
          }
          _isRtl() {
            return this._dir && 'rtl' === this._dir.value;
          }
          _setRanges(e) {
            e instanceof w
              ? ((this._rangeStart = this._getCellCompareValue(e.start)),
                (this._rangeEnd = this._getCellCompareValue(e.end)),
                (this._isRange = !0))
              : ((this._rangeStart = this._rangeEnd = this._getCellCompareValue(e)),
                (this._isRange = !1)),
              (this._comparisonRangeStart = this._getCellCompareValue(this.comparisonStart())),
              (this._comparisonRangeEnd = this._getCellCompareValue(this.comparisonEnd()));
          }
          _canSelect(e) {
            return !this.dateFilter() || this.dateFilter()(e);
          }
          _clearPreview() {
            this._previewStart = this._previewEnd = null;
          }
        }
        return (
          ((n = c).ɵfac = function (e) {
            return new (e || n)(
              t.rXU(t.gRc),
              t.rXU(E, 8),
              t.rXU(M.$, 8),
              t.rXU(ee.dS, 8),
              t.rXU(J, 8),
            );
          }),
          (n.ɵcmp = t.VBU({
            type: n,
            selectors: [['ngx-mat-month-view']],
            viewQuery: function (e, a) {
              1 & e && t.wEZ(a._matCalendarBody, O, 5), 2 & e && t.NyB();
            },
            inputs: {
              activeDate: 'activeDate',
              selected: 'selected',
              minDate: 'minDate',
              maxDate: 'maxDate',
              dateFilter: [1, 'dateFilter'],
              dateClass: [1, 'dateClass'],
              comparisonStart: [1, 'comparisonStart'],
              comparisonEnd: [1, 'comparisonEnd'],
              startDateAccessibleName: [1, 'startDateAccessibleName'],
              endDateAccessibleName: [1, 'endDateAccessibleName'],
              activeDrag: [1, 'activeDrag'],
            },
            outputs: {
              selectedChange: 'selectedChange',
              _userSelection: '_userSelection',
              dragStarted: 'dragStarted',
              dragEnded: 'dragEnded',
              activeDateChange: 'activeDateChange',
            },
            exportAs: ['ngxMatMonthView'],
            features: [t.OA$],
            decls: 8,
            vars: 14,
            consts: [
              ['role', 'grid', 1, 'mat-calendar-table'],
              [1, 'mat-calendar-table-header'],
              ['scope', 'col'],
              ['aria-hidden', 'true', 'colspan', '7', 1, 'mat-calendar-table-header-divider'],
              [
                'ngx-mat-calendar-body',
                '',
                3,
                'selectedValueChange',
                'activeDateChange',
                'previewChange',
                'dragStarted',
                'dragEnded',
                'keyup',
                'keydown',
                'label',
                'rows',
                'todayValue',
                'startValue',
                'endValue',
                'comparisonStart',
                'comparisonEnd',
                'previewStart',
                'previewEnd',
                'isRange',
                'labelMinRequiredCells',
                'activeCell',
                'startDateAccessibleName',
                'endDateAccessibleName',
              ],
              [1, 'cdk-visually-hidden'],
              ['aria-hidden', 'true'],
            ],
            template: function (e, a) {
              1 & e &&
                (t.j41(0, 'table', 0)(1, 'thead', 1)(2, 'tr'),
                t.Z7z(3, Ie, 5, 2, 'th', 2, t.Vm6),
                t.k0s(),
                t.j41(5, 'tr'),
                t.nrm(6, 'th', 3),
                t.k0s()(),
                t.j41(7, 'tbody', 4),
                t.bIt('selectedValueChange', function (r) {
                  return a._dateSelected(r);
                })('activeDateChange', function (r) {
                  return a._updateActiveDate(r);
                })('previewChange', function (r) {
                  return a._previewChanged(r);
                })('dragStarted', function (r) {
                  return a.dragStarted.emit(r);
                })('dragEnded', function (r) {
                  return a._dragEnded(r);
                })('keyup', function (r) {
                  return a._handleCalendarBodyKeyup(r);
                })('keydown', function (r) {
                  return a._handleCalendarBodyKeydown(r);
                }),
                t.k0s()()),
                2 & e &&
                  (t.R7$(3),
                  t.Dyx(a._weekdays),
                  t.R7$(4),
                  t.Y8G('label', a._monthLabel)('rows', a._weeks)('todayValue', a._todayDate)(
                    'startValue',
                    a._rangeStart,
                  )('endValue', a._rangeEnd)('comparisonStart', a._comparisonRangeStart)(
                    'comparisonEnd',
                    a._comparisonRangeEnd,
                  )('previewStart', a._previewStart)('previewEnd', a._previewEnd)(
                    'isRange',
                    a._isRange,
                  )('labelMinRequiredCells', 3)(
                    'activeCell',
                    a._dateAdapter.getDate(a.activeDate) - 1,
                  )('startDateAccessibleName', a.startDateAccessibleName())(
                    'endDateAccessibleName',
                    a.endDateAccessibleName(),
                  ));
            },
            dependencies: [O],
            encapsulation: 2,
            changeDetection: 0,
          })),
          c
        );
      })();
      const R = 24;
      let ue = (() => {
        var n;
        class c {
          get activeDate() {
            return this._activeDate;
          }
          set activeDate(e) {
            let a = this._activeDate;
            const i =
              this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)) ||
              this._dateAdapter.today();
            (this._activeDate = this._dateAdapter.clampDate(i, this.minDate, this.maxDate)),
              xe(this._dateAdapter, a, this._activeDate, this.minDate, this.maxDate) ||
                this._init();
          }
          get selected() {
            return this._selected;
          }
          set selected(e) {
            (this._selected =
              e instanceof w
                ? e
                : this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))),
              this._setSelectedYear(e);
          }
          get minDate() {
            return this._minDate;
          }
          set minDate(e) {
            this._minDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));
          }
          get maxDate() {
            return this._maxDate;
          }
          set maxDate(e) {
            this._maxDate = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));
          }
          constructor(e, a, i) {
            if (
              ((this._changeDetectorRef = e),
              (this._dateAdapter = a),
              (this._dir = i),
              (this._rerenderSubscription = B.yU.EMPTY),
              (this.dateFilter = (0, t.hFB)()),
              (this.dateClass = (0, t.hFB)()),
              (this.selectedChange = (0, t.CGW)()),
              (this.yearSelected = (0, t.CGW)()),
              (this.activeDateChange = (0, t.CGW)()),
              (this._matCalendarBody = (0, t.ebz)(O)),
              !this._dateAdapter)
            )
              throw T('DateAdapter');
            this._activeDate = this._dateAdapter.today();
          }
          ngAfterContentInit() {
            this._rerenderSubscription = this._dateAdapter.localeChanges
              .pipe((0, L.Z)(null))
              .subscribe(() => this._init());
          }
          ngOnDestroy() {
            this._rerenderSubscription.unsubscribe();
          }
          _init() {
            this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today());
            const a =
              this._dateAdapter.getYear(this._activeDate) -
              q(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
            this._years = [];
            for (let i = 0, r = []; i < R; i++)
              r.push(a + i),
                4 == r.length &&
                  (this._years.push(r.map((h) => this._createCellForYear(h))), (r = []));
            this._changeDetectorRef.markForCheck();
          }
          _yearSelected(e) {
            const a = e.value,
              i = this._dateAdapter.createDate(a, 0, 1),
              r = this._getDateFromYear(a);
            this.yearSelected.emit(i), this.selectedChange.emit(r);
          }
          _updateActiveDate(e) {
            const i = this._activeDate;
            (this.activeDate = this._getDateFromYear(e.value)),
              this._dateAdapter.compareDate(i, this.activeDate) &&
                this.activeDateChange.emit(this.activeDate);
          }
          _handleCalendarBodyKeydown(e) {
            const a = this._activeDate,
              i = this._isRtl();
            switch (e.keyCode) {
              case p.UQ:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, i ? 1 : -1);
                break;
              case p.LE:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, i ? -1 : 1);
                break;
              case p.i7:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -4);
                break;
              case p.n6:
                this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, 4);
                break;
              case p.yZ:
                this.activeDate = this._dateAdapter.addCalendarYears(
                  this._activeDate,
                  -q(this._dateAdapter, this.activeDate, this.minDate, this.maxDate),
                );
                break;
              case p.Kp:
                this.activeDate = this._dateAdapter.addCalendarYears(
                  this._activeDate,
                  R - q(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1,
                );
                break;
              case p.w_:
                this.activeDate = this._dateAdapter.addCalendarYears(
                  this._activeDate,
                  e.altKey ? -240 : -R,
                );
                break;
              case p.dB:
                this.activeDate = this._dateAdapter.addCalendarYears(
                  this._activeDate,
                  e.altKey ? 240 : R,
                );
                break;
              case p.Fm:
              case p.t6:
                this._selectionKeyPressed = !0;
                break;
              default:
                return;
            }
            this._dateAdapter.compareDate(a, this.activeDate) &&
              this.activeDateChange.emit(this.activeDate),
              this._focusActiveCellAfterViewChecked(),
              e.preventDefault();
          }
          _handleCalendarBodyKeyup(e) {
            (e.keyCode === p.t6 || e.keyCode === p.Fm) &&
              (this._selectionKeyPressed &&
                this._yearSelected({
                  value: this._dateAdapter.getYear(this._activeDate),
                  event: e,
                }),
              (this._selectionKeyPressed = !1));
          }
          _getActiveCell() {
            return q(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
          }
          _focusActiveCell() {
            this._matCalendarBody()._focusActiveCell();
          }
          _focusActiveCellAfterViewChecked() {
            this._matCalendarBody()._scheduleFocusActiveCellAfterViewChecked();
          }
          _getDateFromYear(e) {
            const a = this._dateAdapter.getMonth(this.activeDate),
              i = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e, a, 1));
            return this._dateAdapter.createDate(
              e,
              a,
              Math.min(this._dateAdapter.getDate(this.activeDate), i),
            );
          }
          _createCellForYear(e) {
            const a = this._dateAdapter.createDate(e, 0, 1),
              i = this._dateAdapter.getYearName(a),
              r = this.dateClass() ? this.dateClass()(a, 'multi-year') : void 0;
            return new A(e, i, i, this._shouldEnableYear(e), r);
          }
          _shouldEnableYear(e) {
            if (
              null == e ||
              (this.maxDate && e > this._dateAdapter.getYear(this.maxDate)) ||
              (this.minDate && e < this._dateAdapter.getYear(this.minDate))
            )
              return !1;
            if (!this.dateFilter()) return !0;
            for (
              let i = this._dateAdapter.createDate(e, 0, 1);
              this._dateAdapter.getYear(i) == e;
              i = this._dateAdapter.addCalendarDays(i, 1)
            )
              if (this.dateFilter()(i)) return !0;
            return !1;
          }
          _isRtl() {
            return this._dir && 'rtl' === this._dir.value;
          }
          _setSelectedYear(e) {
            if (((this._selectedYear = null), e instanceof w)) {
              const a = e.start || e.end;
              a && (this._selectedYear = this._dateAdapter.getYear(a));
            } else e && (this._selectedYear = this._dateAdapter.getYear(e));
          }
        }
        return (
          ((n = c).ɵfac = function (e) {
            return new (e || n)(t.rXU(t.gRc), t.rXU(M.$, 8), t.rXU(ee.dS, 8));
          }),
          (n.ɵcmp = t.VBU({
            type: n,
            selectors: [['ngx-mat-multi-year-view']],
            viewQuery: function (e, a) {
              1 & e && t.wEZ(a._matCalendarBody, O, 5), 2 & e && t.NyB();
            },
            inputs: {
              activeDate: 'activeDate',
              selected: 'selected',
              minDate: 'minDate',
              maxDate: 'maxDate',
              dateFilter: [1, 'dateFilter'],
              dateClass: [1, 'dateClass'],
            },
            outputs: {
              selectedChange: 'selectedChange',
              yearSelected: 'yearSelected',
              activeDateChange: 'activeDateChange',
            },
            exportAs: ['ngxMatMultiYearView'],
            decls: 5,
            vars: 7,
            consts: [
              ['role', 'grid', 1, 'mat-calendar-table'],
              ['aria-hidden', 'true', 1, 'mat-calendar-table-header'],
              ['colspan', '4', 1, 'mat-calendar-table-header-divider'],
              [
                'ngx-mat-calendar-body',
                '',
                3,
                'selectedValueChange',
                'activeDateChange',
                'keyup',
                'keydown',
                'rows',
                'todayValue',
                'startValue',
                'endValue',
                'numCols',
                'cellAspectRatio',
                'activeCell',
              ],
            ],
            template: function (e, a) {
              1 & e &&
                (t.j41(0, 'table', 0)(1, 'thead', 1)(2, 'tr'),
                t.nrm(3, 'th', 2),
                t.k0s()(),
                t.j41(4, 'tbody', 3),
                t.bIt('selectedValueChange', function (r) {
                  return a._yearSelected(r);
                })('activeDateChange', function (r) {
                  return a._updateActiveDate(r);
                })('keyup', function (r) {
                  return a._handleCalendarBodyKeyup(r);
                })('keydown', function (r) {
                  return a._handleCalendarBodyKeydown(r);
                }),
                t.k0s()()),
                2 & e &&
                  (t.R7$(4),
                  t.Y8G('rows', a._years)('todayValue', a._todayYear)(
                    'startValue',
                    a._selectedYear,
                  )('endValue', a._selectedYear)('numCols', 4)('cellAspectRatio', 4 / 7)(
                    'activeCell',
                    a._getActiveCell(),
                  ));
            },
            dependencies: [O],
            encapsulation: 2,
            changeDetection: 0,
          })),
          c
        );
      })();
      function xe(n, c, o, e, a) {
        const i = n.getYear(c),
          r = n.getYear(o),
          h = De(n, e, a);
        return Math.floor((i - h) / R) === Math.floor((r - h) / R);
      }
      function q(n, c, o, e) {
        return (function Ee(n, c) {
          return ((n % c) + c) % c;
        })(n.getYear(c) - De(n, o, e), R);
      }
      function De(n, c, o) {
        let e = 0;
        return o ? (e = n.getYear(o) - R + 1) : c && (e = n.getYear(c)), e;
      }
      let pe = (() => {
          var n;
          class c {
            get activeDate() {
              return this._activeDate;
            }
            set activeDate(e) {
              let a = this._activeDate;
              const i =
                this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)) ||
                this._dateAdapter.today();
              (this._activeDate = this._dateAdapter.clampDate(i, this.minDate, this.maxDate)),
                this._dateAdapter.getYear(a) !== this._dateAdapter.getYear(this._activeDate) &&
                  this._init();
            }
            get selected() {
              return this._selected;
            }
            set selected(e) {
              (this._selected =
                e instanceof w
                  ? e
                  : this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))),
                this._setSelectedMonth(e);
            }
            get minDate() {
              return this._minDate;
            }
            set minDate(e) {
              this._minDate = this._dateAdapter.getValidDateOrNull(
                this._dateAdapter.deserialize(e),
              );
            }
            get maxDate() {
              return this._maxDate;
            }
            set maxDate(e) {
              this._maxDate = this._dateAdapter.getValidDateOrNull(
                this._dateAdapter.deserialize(e),
              );
            }
            constructor(e, a, i, r) {
              if (
                ((this._changeDetectorRef = e),
                (this._dateFormats = a),
                (this._dateAdapter = i),
                (this._dir = r),
                (this._rerenderSubscription = B.yU.EMPTY),
                (this.dateFilter = (0, t.hFB)()),
                (this.dateClass = (0, t.hFB)()),
                (this.selectedChange = (0, t.CGW)()),
                (this.monthSelected = (0, t.CGW)()),
                (this.activeDateChange = (0, t.CGW)()),
                (this._matCalendarBody = (0, t.ebz)(O)),
                !this._dateAdapter)
              )
                throw T('DateAdapter');
              if (!this._dateFormats) throw T('MAT_DATE_FORMATS');
              this._activeDate = this._dateAdapter.today();
            }
            ngAfterContentInit() {
              this._rerenderSubscription = this._dateAdapter.localeChanges
                .pipe((0, L.Z)(null))
                .subscribe(() => this._init());
            }
            ngOnDestroy() {
              this._rerenderSubscription.unsubscribe();
            }
            _monthSelected(e) {
              const a = e.value,
                i = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), a, 1);
              this.monthSelected.emit(i);
              const r = this._getDateFromMonth(a);
              this.selectedChange.emit(r);
            }
            _updateActiveDate(e) {
              const i = this._activeDate;
              (this.activeDate = this._getDateFromMonth(e.value)),
                this._dateAdapter.compareDate(i, this.activeDate) &&
                  this.activeDateChange.emit(this.activeDate);
            }
            _handleCalendarBodyKeydown(e) {
              const a = this._activeDate,
                i = this._isRtl();
              switch (e.keyCode) {
                case p.UQ:
                  this.activeDate = this._dateAdapter.addCalendarMonths(
                    this._activeDate,
                    i ? 1 : -1,
                  );
                  break;
                case p.LE:
                  this.activeDate = this._dateAdapter.addCalendarMonths(
                    this._activeDate,
                    i ? -1 : 1,
                  );
                  break;
                case p.i7:
                  this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
                  break;
                case p.n6:
                  this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
                  break;
                case p.yZ:
                  this.activeDate = this._dateAdapter.addCalendarMonths(
                    this._activeDate,
                    -this._dateAdapter.getMonth(this._activeDate),
                  );
                  break;
                case p.Kp:
                  this.activeDate = this._dateAdapter.addCalendarMonths(
                    this._activeDate,
                    11 - this._dateAdapter.getMonth(this._activeDate),
                  );
                  break;
                case p.w_:
                  this.activeDate = this._dateAdapter.addCalendarYears(
                    this._activeDate,
                    e.altKey ? -10 : -1,
                  );
                  break;
                case p.dB:
                  this.activeDate = this._dateAdapter.addCalendarYears(
                    this._activeDate,
                    e.altKey ? 10 : 1,
                  );
                  break;
                case p.Fm:
                case p.t6:
                  this._selectionKeyPressed = !0;
                  break;
                default:
                  return;
              }
              this._dateAdapter.compareDate(a, this.activeDate) &&
                (this.activeDateChange.emit(this.activeDate),
                this._focusActiveCellAfterViewChecked()),
                e.preventDefault();
            }
            _handleCalendarBodyKeyup(e) {
              (e.keyCode === p.t6 || e.keyCode === p.Fm) &&
                (this._selectionKeyPressed &&
                  this._monthSelected({
                    value: this._dateAdapter.getMonth(this._activeDate),
                    event: e,
                  }),
                (this._selectionKeyPressed = !1));
            }
            _init() {
              this._setSelectedMonth(this.selected),
                (this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today())),
                (this._yearLabel = this._dateAdapter.getYearName(this.activeDate));
              let e = this._dateAdapter.getMonthNames('short');
              (this._months = [
                [0, 1, 2, 3],
                [4, 5, 6, 7],
                [8, 9, 10, 11],
              ].map((a) => a.map((i) => this._createCellForMonth(i, e[i])))),
                this._changeDetectorRef.markForCheck();
            }
            _focusActiveCell() {
              this._matCalendarBody()._focusActiveCell();
            }
            _focusActiveCellAfterViewChecked() {
              this._matCalendarBody()._scheduleFocusActiveCellAfterViewChecked();
            }
            _getMonthInCurrentYear(e) {
              return e && this._dateAdapter.getYear(e) == this._dateAdapter.getYear(this.activeDate)
                ? this._dateAdapter.getMonth(e)
                : null;
            }
            _getDateFromMonth(e) {
              const a = this._dateAdapter.createDate(
                  this._dateAdapter.getYear(this.activeDate),
                  e,
                  1,
                ),
                i = this._dateAdapter.getNumDaysInMonth(a);
              return this._dateAdapter.createDate(
                this._dateAdapter.getYear(this.activeDate),
                e,
                Math.min(this._dateAdapter.getDate(this.activeDate), i),
              );
            }
            _createCellForMonth(e, a) {
              const i = this._dateAdapter.createDate(
                  this._dateAdapter.getYear(this.activeDate),
                  e,
                  1,
                ),
                r = this._dateAdapter.format(i, this._dateFormats.display.monthYearA11yLabel),
                h = this.dateClass() ? this.dateClass()(i, 'year') : void 0;
              return new A(e, a.toLocaleUpperCase(), r, this._shouldEnableMonth(e), h);
            }
            _shouldEnableMonth(e) {
              const a = this._dateAdapter.getYear(this.activeDate);
              if (
                null == e ||
                this._isYearAndMonthAfterMaxDate(a, e) ||
                this._isYearAndMonthBeforeMinDate(a, e)
              )
                return !1;
              if (!this.dateFilter()) return !0;
              for (
                let r = this._dateAdapter.createDate(a, e, 1);
                this._dateAdapter.getMonth(r) == e;
                r = this._dateAdapter.addCalendarDays(r, 1)
              )
                if (this.dateFilter()(r)) return !0;
              return !1;
            }
            _isYearAndMonthAfterMaxDate(e, a) {
              if (this.maxDate) {
                const i = this._dateAdapter.getYear(this.maxDate),
                  r = this._dateAdapter.getMonth(this.maxDate);
                return e > i || (e === i && a > r);
              }
              return !1;
            }
            _isYearAndMonthBeforeMinDate(e, a) {
              if (this.minDate) {
                const i = this._dateAdapter.getYear(this.minDate),
                  r = this._dateAdapter.getMonth(this.minDate);
                return e < i || (e === i && a < r);
              }
              return !1;
            }
            _isRtl() {
              return this._dir && 'rtl' === this._dir.value;
            }
            _setSelectedMonth(e) {
              this._selectedMonth =
                e instanceof w
                  ? this._getMonthInCurrentYear(e.start) || this._getMonthInCurrentYear(e.end)
                  : this._getMonthInCurrentYear(e);
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(t.rXU(t.gRc), t.rXU(E, 8), t.rXU(M.$, 8), t.rXU(ee.dS, 8));
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [['ngx-mat-year-view']],
              viewQuery: function (e, a) {
                1 & e && t.wEZ(a._matCalendarBody, O, 5), 2 & e && t.NyB();
              },
              inputs: {
                activeDate: 'activeDate',
                selected: 'selected',
                minDate: 'minDate',
                maxDate: 'maxDate',
                dateFilter: [1, 'dateFilter'],
                dateClass: [1, 'dateClass'],
              },
              outputs: {
                selectedChange: 'selectedChange',
                monthSelected: 'monthSelected',
                activeDateChange: 'activeDateChange',
              },
              exportAs: ['ngxMatYearView'],
              decls: 5,
              vars: 9,
              consts: [
                ['role', 'grid', 1, 'mat-calendar-table'],
                ['aria-hidden', 'true', 1, 'mat-calendar-table-header'],
                ['colspan', '4', 1, 'mat-calendar-table-header-divider'],
                [
                  'ngx-mat-calendar-body',
                  '',
                  3,
                  'selectedValueChange',
                  'activeDateChange',
                  'keyup',
                  'keydown',
                  'label',
                  'rows',
                  'todayValue',
                  'startValue',
                  'endValue',
                  'labelMinRequiredCells',
                  'numCols',
                  'cellAspectRatio',
                  'activeCell',
                ],
              ],
              template: function (e, a) {
                1 & e &&
                  (t.j41(0, 'table', 0)(1, 'thead', 1)(2, 'tr'),
                  t.nrm(3, 'th', 2),
                  t.k0s()(),
                  t.j41(4, 'tbody', 3),
                  t.bIt('selectedValueChange', function (r) {
                    return a._monthSelected(r);
                  })('activeDateChange', function (r) {
                    return a._updateActiveDate(r);
                  })('keyup', function (r) {
                    return a._handleCalendarBodyKeyup(r);
                  })('keydown', function (r) {
                    return a._handleCalendarBodyKeydown(r);
                  }),
                  t.k0s()()),
                  2 & e &&
                    (t.R7$(4),
                    t.Y8G('label', a._yearLabel)('rows', a._months)('todayValue', a._todayMonth)(
                      'startValue',
                      a._selectedMonth,
                    )('endValue', a._selectedMonth)('labelMinRequiredCells', 2)('numCols', 4)(
                      'cellAspectRatio',
                      4 / 7,
                    )('activeCell', a._dateAdapter.getMonth(a.activeDate)));
              },
              dependencies: [O],
              encapsulation: 2,
              changeDetection: 0,
            })),
            c
          );
        })(),
        te = (() => {
          var n;
          class c {
            constructor() {
              (this.changes = new S.B()),
                (this.calendarLabel = 'Calendar'),
                (this.openCalendarLabel = 'Open calendar'),
                (this.closeCalendarLabel = 'Close calendar'),
                (this.prevMonthLabel = 'Previous month'),
                (this.nextMonthLabel = 'Next month'),
                (this.prevYearLabel = 'Previous year'),
                (this.nextYearLabel = 'Next year'),
                (this.prevMultiYearLabel = 'Previous 24 years'),
                (this.nextMultiYearLabel = 'Next 24 years'),
                (this.switchToMonthViewLabel = 'Choose date'),
                (this.switchToMultiYearViewLabel = 'Choose month and year'),
                (this.startDateLabel = 'Start date'),
                (this.endDateLabel = 'End date');
            }
            formatYearRange(e, a) {
              return ''.concat(e, ' \u2013 ').concat(a);
            }
            formatYearRangeLabel(e, a) {
              return ''.concat(e, ' to ').concat(a);
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵprov = t.jDH({ token: n, factory: n.ɵfac, providedIn: 'root' })),
            c
          );
        })();
      const Se = ['*'];
      function Ve(n, c) {}
      function Te(n, c) {
        if (1 & n) {
          const o = t.RV6();
          t.j41(0, 'ngx-mat-month-view', 4),
            t.mxI('activeDateChange', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.DH7(i.activeDate, a) || (i.activeDate = a), t.Njj(a);
            }),
            t.bIt('_userSelection', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.Njj(i._dateSelected(a));
            })('dragStarted', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.Njj(i._dragStarted(a));
            })('dragEnded', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.Njj(i._dragEnded(a));
            }),
            t.k0s();
        }
        if (2 & n) {
          const o = t.XpG();
          t.R50('activeDate', o.activeDate),
            t.Y8G('selected', o.selected)('dateFilter', o.dateFilter())('maxDate', o.maxDate)(
              'minDate',
              o.minDate,
            )('dateClass', o.dateClass())('comparisonStart', o.comparisonStart())(
              'comparisonEnd',
              o.comparisonEnd(),
            )('startDateAccessibleName', o.startDateAccessibleName())(
              'endDateAccessibleName',
              o.endDateAccessibleName(),
            )('activeDrag', o._activeDrag);
        }
      }
      function Re(n, c) {
        if (1 & n) {
          const o = t.RV6();
          t.j41(0, 'ngx-mat-year-view', 5),
            t.mxI('activeDateChange', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.DH7(i.activeDate, a) || (i.activeDate = a), t.Njj(a);
            }),
            t.bIt('monthSelected', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.Njj(i._monthSelectedInYearView(a));
            })('selectedChange', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.Njj(i._goToDateInView(a, 'month'));
            }),
            t.k0s();
        }
        if (2 & n) {
          const o = t.XpG();
          t.R50('activeDate', o.activeDate),
            t.Y8G('selected', o.selected)('dateFilter', o.dateFilter())('maxDate', o.maxDate)(
              'minDate',
              o.minDate,
            )('dateClass', o.dateClass());
        }
      }
      function Fe(n, c) {
        if (1 & n) {
          const o = t.RV6();
          t.j41(0, 'ngx-mat-multi-year-view', 6),
            t.mxI('activeDateChange', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.DH7(i.activeDate, a) || (i.activeDate = a), t.Njj(a);
            }),
            t.bIt('yearSelected', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.Njj(i._yearSelectedInMultiYearView(a));
            })('selectedChange', function (a) {
              t.eBV(o);
              const i = t.XpG();
              return t.Njj(i._goToDateInView(a, 'year'));
            }),
            t.k0s();
        }
        if (2 & n) {
          const o = t.XpG();
          t.R50('activeDate', o.activeDate),
            t.Y8G('selected', o.selected)('dateFilter', o.dateFilter())('maxDate', o.maxDate)(
              'minDate',
              o.minDate,
            )('dateClass', o.dateClass());
        }
      }
      let Be = 1,
        Pe = (() => {
          var n;
          class c {
            constructor(e, a, i, r, h) {
              (this._intl = e),
                (this.calendar = a),
                (this._dateAdapter = i),
                (this._dateFormats = r),
                (this._id = 'mat-calendar-header-'.concat(Be++)),
                (this._periodButtonLabelId = ''.concat(this._id, '-period-label')),
                this.calendar.stateChanges.subscribe(() => h.markForCheck());
            }
            get periodButtonText() {
              return 'month' == this.calendar.currentView()
                ? this._dateAdapter
                    .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                    .toLocaleUpperCase()
                : 'year' == this.calendar.currentView()
                  ? this._dateAdapter.getYearName(this.calendar.activeDate)
                  : this._intl.formatYearRange(...this._formatMinAndMaxYearLabels());
            }
            get periodButtonDescription() {
              return 'month' == this.calendar.currentView()
                ? this._dateAdapter
                    .format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel)
                    .toLocaleUpperCase()
                : 'year' == this.calendar.currentView()
                  ? this._dateAdapter.getYearName(this.calendar.activeDate)
                  : this._intl.formatYearRangeLabel(...this._formatMinAndMaxYearLabels());
            }
            get periodButtonLabel() {
              return 'month' == this.calendar.currentView()
                ? this._intl.switchToMultiYearViewLabel
                : this._intl.switchToMonthViewLabel;
            }
            get prevButtonLabel() {
              return {
                month: this._intl.prevMonthLabel,
                year: this._intl.prevYearLabel,
                'multi-year': this._intl.prevMultiYearLabel,
              }[this.calendar.currentView()];
            }
            get nextButtonLabel() {
              return {
                month: this._intl.nextMonthLabel,
                year: this._intl.nextYearLabel,
                'multi-year': this._intl.nextMultiYearLabel,
              }[this.calendar.currentView()];
            }
            currentPeriodClicked() {
              this.calendar.currentView.set(
                'month' == this.calendar.currentView() ? 'multi-year' : 'month',
              );
            }
            previousClicked() {
              this.calendar.activeDate =
                'month' == this.calendar.currentView()
                  ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1)
                  : this._dateAdapter.addCalendarYears(
                      this.calendar.activeDate,
                      'year' == this.calendar.currentView() ? -1 : -R,
                    );
            }
            nextClicked() {
              this.calendar.activeDate =
                'month' == this.calendar.currentView()
                  ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1)
                  : this._dateAdapter.addCalendarYears(
                      this.calendar.activeDate,
                      'year' == this.calendar.currentView() ? 1 : R,
                    );
            }
            previousEnabled() {
              return (
                !this.calendar.minDate ||
                !this.calendar.minDate ||
                !this._isSameView(this.calendar.activeDate, this.calendar.minDate)
              );
            }
            nextEnabled() {
              return (
                !this.calendar.maxDate ||
                !this._isSameView(this.calendar.activeDate, this.calendar.maxDate)
              );
            }
            _isSameView(e, a) {
              return 'month' == this.calendar.currentView()
                ? this._dateAdapter.getYear(e) == this._dateAdapter.getYear(a) &&
                    this._dateAdapter.getMonth(e) == this._dateAdapter.getMonth(a)
                : 'year' == this.calendar.currentView()
                  ? this._dateAdapter.getYear(e) == this._dateAdapter.getYear(a)
                  : xe(this._dateAdapter, e, a, this.calendar.minDate, this.calendar.maxDate);
            }
            _formatMinAndMaxYearLabels() {
              const a =
                  this._dateAdapter.getYear(this.calendar.activeDate) -
                  q(
                    this._dateAdapter,
                    this.calendar.activeDate,
                    this.calendar.minDate,
                    this.calendar.maxDate,
                  ),
                i = a + R - 1;
              return [
                this._dateAdapter.getYearName(this._dateAdapter.createDate(a, 0, 1)),
                this._dateAdapter.getYearName(this._dateAdapter.createDate(i, 0, 1)),
              ];
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(
                t.rXU(te),
                t.rXU((0, t.Rfq)(() => ae)),
                t.rXU(M.$, 8),
                t.rXU(E, 8),
                t.rXU(t.gRc),
              );
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [['ngx-mat-calendar-header']],
              exportAs: ['ngxMatCalendarHeader'],
              ngContentSelectors: Se,
              decls: 13,
              vars: 11,
              consts: [
                [1, 'mat-calendar-header'],
                [1, 'mat-calendar-controls'],
                [
                  'mat-button',
                  '',
                  'type',
                  'button',
                  'aria-live',
                  'polite',
                  1,
                  'mat-calendar-period-button',
                  3,
                  'click',
                ],
                ['aria-hidden', 'true'],
                [
                  'viewBox',
                  '0 0 10 5',
                  'focusable',
                  'false',
                  'aria-hidden',
                  'true',
                  1,
                  'mat-calendar-arrow',
                ],
                ['points', '0,0 5,5 10,0'],
                [1, 'mat-calendar-spacer'],
                [
                  'mat-icon-button',
                  '',
                  'type',
                  'button',
                  1,
                  'mat-calendar-previous-button',
                  3,
                  'click',
                  'disabled',
                ],
                [
                  'mat-icon-button',
                  '',
                  'type',
                  'button',
                  1,
                  'mat-calendar-next-button',
                  3,
                  'click',
                  'disabled',
                ],
                [1, 'mat-calendar-hidden-label', 3, 'id'],
              ],
              template: function (e, a) {
                1 & e &&
                  (t.NAR(),
                  t.j41(0, 'div', 0)(1, 'div', 1)(2, 'button', 2),
                  t.bIt('click', function () {
                    return a.currentPeriodClicked();
                  }),
                  t.j41(3, 'span', 3),
                  t.EFF(4),
                  t.k0s(),
                  t.qSk(),
                  t.j41(5, 'svg', 4),
                  t.nrm(6, 'polygon', 5),
                  t.k0s()(),
                  t.joV(),
                  t.nrm(7, 'div', 6),
                  t.SdG(8),
                  t.j41(9, 'button', 7),
                  t.bIt('click', function () {
                    return a.previousClicked();
                  }),
                  t.k0s(),
                  t.j41(10, 'button', 8),
                  t.bIt('click', function () {
                    return a.nextClicked();
                  }),
                  t.k0s()()(),
                  t.j41(11, 'label', 9),
                  t.EFF(12),
                  t.k0s()),
                  2 & e &&
                    (t.R7$(2),
                    t.BMQ('aria-label', a.periodButtonLabel)(
                      'aria-describedby',
                      a._periodButtonLabelId,
                    ),
                    t.R7$(2),
                    t.JRh(a.periodButtonText),
                    t.R7$(),
                    t.AVh('mat-calendar-invert', 'month' !== a.calendar.currentView()),
                    t.R7$(4),
                    t.Y8G('disabled', !a.previousEnabled()),
                    t.BMQ('aria-label', a.prevButtonLabel),
                    t.R7$(),
                    t.Y8G('disabled', !a.nextEnabled()),
                    t.BMQ('aria-label', a.nextButtonLabel),
                    t.R7$(),
                    t.Y8G('id', a._periodButtonLabelId),
                    t.R7$(),
                    t.JRh(a.periodButtonDescription));
              },
              dependencies: [k.$z, k.iY],
              encapsulation: 2,
              changeDetection: 0,
            })),
            c
          );
        })(),
        ae = (() => {
          var n;
          class c {
            get startAt() {
              return this._startAt;
            }
            set startAt(e) {
              this._startAt = this._dateAdapter.getValidDateOrNull(
                this._dateAdapter.deserialize(e),
              );
            }
            get selected() {
              return this._selected;
            }
            set selected(e) {
              this._selected =
                e instanceof w
                  ? e
                  : this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));
            }
            get minDate() {
              return this._minDate;
            }
            set minDate(e) {
              this._minDate = this._dateAdapter.getValidDateOrNull(
                this._dateAdapter.deserialize(e),
              );
            }
            get maxDate() {
              return this._maxDate;
            }
            set maxDate(e) {
              this._maxDate = this._dateAdapter.getValidDateOrNull(
                this._dateAdapter.deserialize(e),
              );
            }
            get activeDate() {
              return this._clampedActiveDate;
            }
            set activeDate(e) {
              (this._clampedActiveDate = this._dateAdapter.clampDate(
                e,
                this.minDate,
                this.maxDate,
              )),
                this.stateChanges.next(),
                this._changeDetectorRef.markForCheck();
            }
            constructor(e, a, i, r) {
              if (
                ((this._dateAdapter = a),
                (this._dateFormats = i),
                (this._changeDetectorRef = r),
                (this.headerComponent = (0, t.hFB)()),
                (this._moveFocusOnNextTick = (0, t.uuI)(() => !!this.currentView())),
                (this.startView = (0, t.hFB)('month')),
                (this.dateFilter = (0, t.hFB)()),
                (this.dateClass = (0, t.hFB)()),
                (this.comparisonStart = (0, t.hFB)()),
                (this.comparisonEnd = (0, t.hFB)()),
                (this.startDateAccessibleName = (0, t.hFB)()),
                (this.endDateAccessibleName = (0, t.hFB)()),
                (this.currentView = (0, t.uuI)(() => this.startView())),
                (this.selectedChange = (0, t.CGW)()),
                (this.yearSelected = (0, t.CGW)()),
                (this.monthSelected = (0, t.CGW)()),
                (this.viewChanged = (0, x.p)((0, x.br)(this.currentView))),
                (this._userSelection = (0, t.CGW)()),
                (this._userDragDrop = (0, t.CGW)()),
                (this.monthView = (0, t.ebz)(_e)),
                (this.yearView = (0, t.ebz)(pe)),
                (this.multiYearView = (0, t.ebz)(ue)),
                (this._activeDrag = null),
                (this.stateChanges = new S.B()),
                !this._dateAdapter)
              )
                throw T('DateAdapter');
              if (!this._dateFormats) throw T('MAT_DATE_FORMATS');
              this._intlChanges = e.changes.subscribe(() => {
                r.markForCheck(), this.stateChanges.next();
              });
            }
            ngAfterContentInit() {
              (this._calendarHeaderPortal = new D.A8(this.headerComponent() || Pe)),
                (this.activeDate = this.startAt || this._dateAdapter.today());
            }
            ngAfterViewChecked() {
              this._moveFocusOnNextTick() &&
                (this._moveFocusOnNextTick.set(!1), this.focusActiveCell());
            }
            ngOnDestroy() {
              this._intlChanges.unsubscribe(), this.stateChanges.complete();
            }
            ngOnChanges(e) {
              const a =
                  e.minDate &&
                  !this._dateAdapter.sameDate(e.minDate.previousValue, e.minDate.currentValue)
                    ? e.minDate
                    : void 0,
                i =
                  e.maxDate &&
                  !this._dateAdapter.sameDate(e.maxDate.previousValue, e.maxDate.currentValue)
                    ? e.maxDate
                    : void 0,
                r = a || i || e.dateFilter;
              if (r && !r.firstChange) {
                const h = this._getCurrentViewComponent();
                h && (this._changeDetectorRef.detectChanges(), h._init());
              }
              this.stateChanges.next();
            }
            focusActiveCell() {
              const e = this._getCurrentViewComponent();
              null == e || e._focusActiveCell(!1);
            }
            updateTodaysDate() {
              this._getCurrentViewComponent()._init();
            }
            _dateSelected(e) {
              e.value && this.selected && this._dateAdapter.copyTime(e.value, this.selected);
              const a = e.value;
              (this.selected instanceof w ||
                (a && !this._dateAdapter.sameDate(a, this.selected))) &&
                this.selectedChange.emit(a),
                this._userSelection.emit(e);
            }
            _yearSelectedInMultiYearView(e) {
              this.yearSelected.emit(e);
            }
            _monthSelectedInYearView(e) {
              this.monthSelected.emit(e);
            }
            _goToDateInView(e, a) {
              (this.activeDate = e), this.currentView.set(a);
            }
            _dragStarted(e) {
              this._activeDrag = e;
            }
            _dragEnded(e) {
              this._activeDrag &&
                (e.value && this._userDragDrop.emit(e), (this._activeDrag = null));
            }
            _getCurrentViewComponent() {
              return this.monthView() || this.yearView() || this.multiYearView();
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(t.rXU(te), t.rXU(M.$, 8), t.rXU(E, 8), t.rXU(t.gRc));
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [['ngx-mat-calendar']],
              viewQuery: function (e, a) {
                1 & e &&
                  (t.wEZ(a.monthView, _e, 5),
                  t.wEZ(a.yearView, pe, 5),
                  t.wEZ(a.multiYearView, ue, 5)),
                  2 & e && t.NyB(3);
              },
              hostAttrs: [1, 'mat-calendar'],
              inputs: {
                headerComponent: [1, 'headerComponent'],
                startAt: 'startAt',
                startView: [1, 'startView'],
                selected: 'selected',
                minDate: 'minDate',
                maxDate: 'maxDate',
                dateFilter: [1, 'dateFilter'],
                dateClass: [1, 'dateClass'],
                comparisonStart: [1, 'comparisonStart'],
                comparisonEnd: [1, 'comparisonEnd'],
                startDateAccessibleName: [1, 'startDateAccessibleName'],
                endDateAccessibleName: [1, 'endDateAccessibleName'],
              },
              outputs: {
                selectedChange: 'selectedChange',
                yearSelected: 'yearSelected',
                monthSelected: 'monthSelected',
                viewChanged: 'viewChanged',
                _userSelection: '_userSelection',
                _userDragDrop: '_userDragDrop',
              },
              exportAs: ['ngxMatCalendar'],
              features: [t.Jv_([U]), t.OA$],
              decls: 5,
              vars: 2,
              consts: [
                [3, 'cdkPortalOutlet'],
                ['cdkMonitorSubtreeFocus', '', 'tabindex', '-1', 1, 'mat-calendar-content'],
                [
                  3,
                  'activeDate',
                  'selected',
                  'dateFilter',
                  'maxDate',
                  'minDate',
                  'dateClass',
                  'comparisonStart',
                  'comparisonEnd',
                  'startDateAccessibleName',
                  'endDateAccessibleName',
                  'activeDrag',
                ],
                [3, 'activeDate', 'selected', 'dateFilter', 'maxDate', 'minDate', 'dateClass'],
                [
                  3,
                  'activeDateChange',
                  '_userSelection',
                  'dragStarted',
                  'dragEnded',
                  'activeDate',
                  'selected',
                  'dateFilter',
                  'maxDate',
                  'minDate',
                  'dateClass',
                  'comparisonStart',
                  'comparisonEnd',
                  'startDateAccessibleName',
                  'endDateAccessibleName',
                  'activeDrag',
                ],
                [
                  3,
                  'activeDateChange',
                  'monthSelected',
                  'selectedChange',
                  'activeDate',
                  'selected',
                  'dateFilter',
                  'maxDate',
                  'minDate',
                  'dateClass',
                ],
                [
                  3,
                  'activeDateChange',
                  'yearSelected',
                  'selectedChange',
                  'activeDate',
                  'selected',
                  'dateFilter',
                  'maxDate',
                  'minDate',
                  'dateClass',
                ],
              ],
              template: function (e, a) {
                if (
                  (1 & e &&
                    (t.DNE(0, Ve, 0, 0, 'ng-template', 0),
                    t.j41(1, 'div', 1),
                    t.DNE(2, Te, 1, 11, 'ngx-mat-month-view', 2)(
                      3,
                      Re,
                      1,
                      6,
                      'ngx-mat-year-view',
                      3,
                    )(4, Fe, 1, 6, 'ngx-mat-multi-year-view', 3),
                    t.k0s()),
                  2 & e)
                ) {
                  let i;
                  t.Y8G('cdkPortalOutlet', a._calendarHeaderPortal),
                    t.R7$(2),
                    t.vxM(
                      'month' === (i = a.currentView())
                        ? 2
                        : 'year' === i
                          ? 3
                          : 'multi-year' === i
                            ? 4
                            : -1,
                    );
                }
              },
              dependencies: [D.I3, s.vR, _e, pe, ue],
              styles: [
                '.mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0}.mat-calendar-content{padding:0 8px 8px;outline:none}.mat-calendar-controls{display:flex;align-items:center;margin:5% calc(4.7142857143% - 16px)}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0;margin:0 8px}.mat-calendar-arrow{display:inline-block;width:10px;height:5px;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}@media (forced-colors: active){.mat-calendar-arrow{fill:CanvasText}}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button:after,.mat-calendar-next-button:after{top:0;left:0;right:0;bottom:0;position:absolute;content:"";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button:after{border-left-width:2px;transform:translate(2px) rotate(-45deg)}.mat-calendar-next-button:after{border-right-width:2px;transform:translate(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px;color:var(--mat-datepicker-calendar-header-text-color);font-size:var(--mat-datepicker-calendar-header-text-size);font-weight:var(--mat-datepicker-calendar-header-text-weight)}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider:after{content:"";position:absolute;top:0;left:-8px;right:-8px;height:1px}.mat-calendar-body-cell-content:before{margin:calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1)}.mat-calendar-body-cell:focus .mat-focus-indicator:before{content:""}.mat-calendar-hidden-label{display:none}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            c
          );
        })();
      var Oe = g(1586);
      let G;
      try {
        G = typeof Intl < 'u';
      } catch {
        G = !1;
      }
      const Ye = {
          long: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          short: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
          ],
          narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        },
        je = ie(31, (n) => String(n + 1)),
        Le = {
          long: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          short: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        },
        Ge = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
      function ie(n, c) {
        const o = Array(n);
        for (let e = 0; e < n; e++) o[e] = c(e);
        return o;
      }
      let $e = (() => {
        var n;
        class c extends M.$ {
          constructor(e, a) {
            super(),
              (this.useUtcForDisplay = !0),
              super.setLocale(e),
              (this.useUtcForDisplay = !a.TRIDENT),
              (this._clampDate = a.TRIDENT || a.EDGE);
          }
          getYear(e) {
            return e.getFullYear();
          }
          getMonth(e) {
            return e.getMonth();
          }
          getDate(e) {
            return e.getDate();
          }
          getDayOfWeek(e) {
            return e.getDay();
          }
          getMonthNames(e) {
            if (G) {
              const a = new Intl.DateTimeFormat(this.locale, { month: e, timeZone: 'utc' });
              return ie(12, (i) =>
                this._stripDirectionalityCharacters(this._format(a, new Date(2017, i, 1))),
              );
            }
            return Ye[e];
          }
          getDateNames() {
            if (G) {
              const e = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
              return ie(31, (a) =>
                this._stripDirectionalityCharacters(this._format(e, new Date(2017, 0, a + 1))),
              );
            }
            return je;
          }
          getDayOfWeekNames(e) {
            if (G) {
              const a = new Intl.DateTimeFormat(this.locale, { weekday: e, timeZone: 'utc' });
              return ie(7, (i) =>
                this._stripDirectionalityCharacters(this._format(a, new Date(2017, 0, i + 1))),
              );
            }
            return Le[e];
          }
          getYearName(e) {
            if (G) {
              const a = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
              return this._stripDirectionalityCharacters(this._format(a, e));
            }
            return String(this.getYear(e));
          }
          getFirstDayOfWeek() {
            return 0;
          }
          getNumDaysInMonth(e) {
            return this.getDate(
              this._createDateWithOverflow(this.getYear(e), this.getMonth(e) + 1, 0),
            );
          }
          clone(e) {
            return new Date(e.getTime());
          }
          createDate(e, a, i) {
            if (a < 0 || a > 11)
              throw Error(
                'Invalid month index "'.concat(a, '". Month index has to be between 0 and 11.'),
              );
            if (i < 1) throw Error('Invalid date "'.concat(i, '". Date has to be greater than 0.'));
            let r = this._createDateWithOverflow(e, a, i);
            if (r.getMonth() != a)
              throw Error('Invalid date "'.concat(i, '" for month with index "').concat(a, '".'));
            return r;
          }
          today() {
            return new Date();
          }
          parse(e) {
            return 'number' == typeof e ? new Date(e) : e ? new Date(Date.parse(e)) : null;
          }
          format(e, a) {
            if (!this.isValid(e)) throw Error('NativeDateAdapter: Cannot format invalid date.');
            if (G) {
              this._clampDate &&
                (e.getFullYear() < 1 || e.getFullYear() > 9999) &&
                (e = this.clone(e)).setFullYear(Math.max(1, Math.min(9999, e.getFullYear()))),
                (a = { ...a, timeZone: 'utc' });
              const i = new Intl.DateTimeFormat(this.locale, a);
              return this._stripDirectionalityCharacters(this._format(i, e));
            }
            return this._stripDirectionalityCharacters(e.toDateString());
          }
          addCalendarYears(e, a) {
            return this.addCalendarMonths(e, 12 * a);
          }
          addCalendarMonths(e, a) {
            let i = this._createDateWithOverflow(
              this.getYear(e),
              this.getMonth(e) + a,
              this.getDate(e),
            );
            return (
              this.getMonth(i) != (((this.getMonth(e) + a) % 12) + 12) % 12 &&
                (i = this._createDateWithOverflow(this.getYear(i), this.getMonth(i), 0)),
              i
            );
          }
          addCalendarDays(e, a) {
            return this._createDateWithOverflow(
              this.getYear(e),
              this.getMonth(e),
              this.getDate(e) + a,
            );
          }
          toIso8601(e) {
            return [
              e.getUTCFullYear(),
              this._2digit(e.getUTCMonth() + 1),
              this._2digit(e.getUTCDate()),
            ].join('-');
          }
          deserialize(e) {
            if ('string' == typeof e) {
              if (!e) return null;
              if (Ge.test(e)) {
                let a = new Date(e);
                if (this.isValid(a)) return a;
              }
            }
            return super.deserialize(e);
          }
          isDateInstance(e) {
            return e instanceof Date;
          }
          isValid(e) {
            return !isNaN(e.getTime());
          }
          invalid() {
            return new Date(NaN);
          }
          getHour(e) {
            return e.getHours();
          }
          getMinute(e) {
            return e.getMinutes();
          }
          getSecond(e) {
            return e.getSeconds();
          }
          setHour(e, a) {
            e.setHours(a);
          }
          setMinute(e, a) {
            e.setMinutes(a);
          }
          setSecond(e, a) {
            e.setSeconds(a);
          }
          _createDateWithOverflow(e, a, i) {
            const r = new Date(e, a, i);
            return e >= 0 && e < 100 && r.setFullYear(this.getYear(r) - 1900), r;
          }
          _2digit(e) {
            return ('00' + e).slice(-2);
          }
          _stripDirectionalityCharacters(e) {
            return e.replace(/[\u200e\u200f]/g, '');
          }
          _format(e, a) {
            const i = new Date();
            return (
              i.setUTCFullYear(a.getFullYear(), a.getMonth(), a.getDate()),
              i.setUTCHours(a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()),
              e.format(i)
            );
          }
        }
        return (
          ((n = c).ɵfac = function (e) {
            return new (e || n)(t.KVO(Oe.Ju, 8), t.KVO(m.OD));
          }),
          (n.ɵprov = t.jDH({ token: n, factory: n.ɵfac })),
          c
        );
      })();
      const ye = {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour12: !1,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        },
        Ue = {
          parse: { dateInput: ye },
          display: {
            dateInput: ye,
            monthYearLabel: { year: 'numeric', month: 'short' },
            dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
            monthYearA11yLabel: { year: 'numeric', month: 'long' },
          },
        };
      let Xe = (() => {
          var n;
          class c {}
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.$C({ type: n })),
            (n.ɵinj = t.G2t({ providers: [{ provide: M.$, useClass: $e }], imports: [m.IK] })),
            c
          );
        })(),
        He = (() => {
          var n;
          class c {}
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)();
            }),
            (n.ɵmod = t.$C({ type: n })),
            (n.ɵinj = t.G2t({ providers: [{ provide: E, useValue: Ue }], imports: [Xe] })),
            c
          );
        })();
      var j = g(6115);
      class ne {
        constructor(c, o) {
          (this.target = c), (this.targetElement = o), (this.value = this.target.value);
        }
      }
      let We = (() => {
        var n;
        class c {
          get value() {
            return this._model
              ? this._getValueFromModel(this._model.selection)
              : this._pendingValue;
          }
          set value(e) {
            this._assignValueProgrammatically(e);
          }
          get disabled() {
            return !!this._disabled || this._parentDisabled();
          }
          set disabled(e) {
            const a = (0, j.he)(e),
              i = this._elementRef.nativeElement;
            this._disabled !== a && ((this._disabled = a), this.stateChanges.next(void 0)),
              a && this._isInitialized && i.blur && i.blur();
          }
          _getValidators() {
            return [
              this._parseValidator,
              this._minValidator,
              this._maxValidator,
              this._filterValidator,
            ];
          }
          _registerModel(e) {
            (this._model = e),
              this._valueChangesSubscription.unsubscribe(),
              this._pendingValue && this._assignValue(this._pendingValue),
              (this._valueChangesSubscription = this._model.selectionChanged.subscribe((a) => {
                if (this._shouldHandleChangeEvent(a)) {
                  const i = this._getValueFromModel(a.selection);
                  (this._lastValueValid = this._isValidValue(i)),
                    this._cvaOnChange(i),
                    this._onTouched(),
                    this._formatValue(i),
                    this.dateInput.emit(new ne(this, this._elementRef.nativeElement)),
                    this.dateChange.emit(new ne(this, this._elementRef.nativeElement));
                }
              }));
          }
          constructor(e, a, i) {
            if (
              ((this._elementRef = e),
              (this._dateAdapter = a),
              (this._dateFormats = i),
              (this.dateChange = (0, t.CGW)()),
              (this.dateInput = (0, t.CGW)()),
              (this.stateChanges = new S.B()),
              (this._onTouched = () => {}),
              (this._validatorOnChange = () => {}),
              (this._cvaOnChange = () => {}),
              (this._valueChangesSubscription = B.yU.EMPTY),
              (this._localeSubscription = B.yU.EMPTY),
              (this._parseValidator = () =>
                this._lastValueValid
                  ? null
                  : { matDatepickerParse: { text: this._elementRef.nativeElement.value } }),
              (this._filterValidator = (r) => {
                const h = this._dateAdapter.getValidDateOrNull(
                  this._dateAdapter.deserialize(r.value),
                );
                return !h || this._matchesFilter(h) ? null : { matDatepickerFilter: !0 };
              }),
              (this._minValidator = (r) => {
                const h = this._dateAdapter.getValidDateOrNull(
                    this._dateAdapter.deserialize(r.value),
                  ),
                  u = this._getMinDate();
                return !u || !h || this._dateAdapter.compareDateWithTime(u, h) <= 0
                  ? null
                  : { matDatetimePickerMin: { min: u, actual: h } };
              }),
              (this._maxValidator = (r) => {
                const h = this._dateAdapter.getValidDateOrNull(
                    this._dateAdapter.deserialize(r.value),
                  ),
                  u = this._getMaxDate();
                return !u || !h || this._dateAdapter.compareDateWithTime(u, h) >= 0
                  ? null
                  : { matDatetimePickerMax: { max: u, actual: h } };
              }),
              (this._lastValueValid = !1),
              !this._dateAdapter)
            )
              throw T('DateAdapter');
            if (!this._dateFormats) throw T('MAT_DATE_FORMATS');
            this._localeSubscription = a.localeChanges.subscribe(() => {
              this._assignValueProgrammatically(this.value);
            });
          }
          ngAfterViewInit() {
            this._isInitialized = !0;
          }
          ngOnChanges(e) {
            (function Ke(n, c) {
              const o = Object.keys(n);
              for (let e of o) {
                const { previousValue: a, currentValue: i } = n[e];
                if (!c.isDateInstance(a) || !c.isDateInstance(i)) return !0;
                if (!c.sameDate(a, i)) return !0;
              }
              return !1;
            })(e, this._dateAdapter) && this.stateChanges.next(void 0);
          }
          ngOnDestroy() {
            this._valueChangesSubscription.unsubscribe(),
              this._localeSubscription.unsubscribe(),
              this.stateChanges.complete();
          }
          registerOnValidatorChange(e) {
            this._validatorOnChange = e;
          }
          validate(e) {
            return this._validator ? this._validator(e) : null;
          }
          writeValue(e) {
            this._assignValueProgrammatically(e);
          }
          registerOnChange(e) {
            this._cvaOnChange = e;
          }
          registerOnTouched(e) {
            this._onTouched = e;
          }
          setDisabledState(e) {
            this.disabled = e;
          }
          _onKeydown(e) {
            (0, p.rp)(e, 'altKey') &&
              e.keyCode === p.n6 &&
              ['ctrlKey', 'shiftKey', 'metaKey'].every((r) => !(0, p.rp)(e, r)) &&
              !this._elementRef.nativeElement.readOnly &&
              (this._openPopup(), e.preventDefault());
          }
          _onInput(e) {
            const a = this._lastValueValid;
            let i = this._dateAdapter.parse(e, this._dateFormats.parse.dateInput);
            (this._lastValueValid = this._isValidValue(i)),
              (i = this._dateAdapter.getValidDateOrNull(i));
            const r = this._dateAdapter.isSameTime(i, this.value),
              I = !(this._dateAdapter.sameDate(i, this.value) && r);
            !i || I
              ? this._cvaOnChange(i)
              : (e && !this.value && this._cvaOnChange(i),
                a !== this._lastValueValid && this._validatorOnChange()),
              I &&
                (this._assignValue(i),
                this.dateInput.emit(new ne(this, this._elementRef.nativeElement)));
          }
          _onChange() {
            this.dateChange.emit(new ne(this, this._elementRef.nativeElement));
          }
          _onBlur() {
            this.value && this._formatValue(this.value), this._onTouched();
          }
          _formatValue(e) {
            this._elementRef.nativeElement.value =
              null != e ? this._dateAdapter.format(e, this._dateFormats.display.dateInput) : '';
          }
          _assignValue(e) {
            this._model
              ? (this._assignValueToModel(e), (this._pendingValue = null))
              : (this._pendingValue = e);
          }
          _isValidValue(e) {
            return !e || this._dateAdapter.isValid(e);
          }
          _parentDisabled() {
            return !1;
          }
          _assignValueProgrammatically(e) {
            (e = this._dateAdapter.deserialize(e)),
              (this._lastValueValid = this._isValidValue(e)),
              (e = this._dateAdapter.getValidDateOrNull(e)),
              this._assignValue(e),
              this._formatValue(e);
          }
          _matchesFilter(e) {
            const a = this._getDateFilter();
            return !a || a(e);
          }
        }
        return (
          ((n = c).ɵfac = function (e) {
            return new (e || n)(t.rXU(t.aKT), t.rXU(M.$, 8), t.rXU(E, 8));
          }),
          (n.ɵdir = t.FsC({
            type: n,
            inputs: { value: 'value', disabled: 'disabled' },
            outputs: { dateChange: 'dateChange', dateInput: 'dateInput' },
            features: [t.OA$],
          })),
          c
        );
      })();
      new t.nKC('NGX_MAT_DATE_RANGE_INPUT_PARENT');
      var re = g(3221),
        $ = g(8893),
        ge = g(4185),
        Qe = g(6327),
        N = g(3357);
      const Ce = {
        transformPanel: (0, N.hZ)('transformPanel', [
          (0, N.kY)(
            'void => enter-dropdown',
            (0, N.i0)(
              '120ms cubic-bezier(0, 0, 0.2, 1)',
              (0, N.i7)([
                (0, N.iF)({ opacity: 0, transform: 'scale(1, 0.8)' }),
                (0, N.iF)({ opacity: 1, transform: 'scale(1, 1)' }),
              ]),
            ),
          ),
          (0, N.kY)(
            'void => enter-dialog',
            (0, N.i0)(
              '150ms cubic-bezier(0, 0, 0.2, 1)',
              (0, N.i7)([
                (0, N.iF)({ opacity: 0, transform: 'scale(0.7)' }),
                (0, N.iF)({ transform: 'none', opacity: 1 }),
              ]),
            ),
          ),
          (0, N.kY)('* => void', (0, N.i0)('100ms linear', (0, N.iF)({ opacity: 0 }))),
        ]),
        fadeInCalendar: (0, N.hZ)('fadeInCalendar', [
          (0, N.wk)('void', (0, N.iF)({ opacity: 0 })),
          (0, N.wk)('enter', (0, N.iF)({ opacity: 1 })),
          (0, N.kY)('void => *', (0, N.i0)('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)')),
        ]),
      };
      var qe = g(7949),
        be = g(7137);
      function Ze(n, c) {
        if (1 & n) {
          const o = t.RV6();
          t.j41(0, 'div', 5)(1, 'ngx-mat-timepicker', 6),
            t.mxI('ngModelChange', function (a) {
              t.eBV(o);
              const i = t.XpG(2);
              return t.DH7(i._modelTime, a) || (i._modelTime = a), t.Njj(a);
            }),
            t.bIt('ngModelChange', function (a) {
              t.eBV(o);
              const i = t.XpG(2);
              return t.Njj(i.onTimeChanged(a));
            }),
            t.k0s()();
        }
        if (2 & n) {
          const o = t.XpG(2);
          t.AVh('disable-seconds', !o.datepicker._showSeconds),
            t.R7$(),
            t.Y8G('showSpinners', o.datepicker._showSpinners)(
              'showSeconds',
              o.datepicker._showSeconds,
            )('disabled', o.datepicker._disabled || !o._modelTime)(
              'stepHour',
              o.datepicker._stepHour,
            )('stepMinute', o.datepicker._stepMinute)('stepSecond', o.datepicker._stepSecond),
            t.R50('ngModel', o._modelTime),
            t.Y8G('color', o.datepicker._color)('enableMeridian', o.datepicker._enableMeridian)(
              'disableMinute',
              o.datepicker._disableMinute,
            );
        }
      }
      function Je(n, c) {
        if ((1 & n && t.DNE(0, Ze, 2, 12, 'div', 4), 2 & n)) {
          const o = t.XpG();
          t.vxM(o.datepicker._hideTime ? -1 : 0);
        }
      }
      function et(n, c) {}
      let tt = 0;
      const Me = new t.nKC('ngx-mat-datepicker-scroll-strategy'),
        it = {
          provide: Me,
          deps: [re.hJ],
          useFactory: function at(n) {
            return () => n.scrollStrategies.reposition();
          },
        };
      let nt = (() => {
          var n;
          class c {
            get isPrimary() {
              return 'primary' === this.color;
            }
            get isAccent() {
              return 'accent' === this.color;
            }
            get isWarn() {
              return 'warn' === this.color;
            }
            get isViewMonth() {
              return (
                !this._calendar() ||
                null == this._calendar().currentView ||
                'month' == this._calendar().currentView()
              );
            }
            constructor(e, a, i, r, h) {
              (this._changeDetectorRef = e),
                (this._globalModel = a),
                (this._dateAdapter = i),
                (this._rangeSelectionStrategy = r),
                (this._subscriptions = new B.yU()),
                (this._calendar = t.ebz.required(ae)),
                (this._animationDone = new S.B()),
                (this._isAnimating = !1),
                (this._actionsPortal = null),
                (this.color = 'primary'),
                (this._closeButtonText = h.closeCalendarLabel),
                (0, t.QZP)(() => {
                  const u = this._calendar();
                  u && u.focusActiveCell();
                });
            }
            ngOnInit() {
              this._animationState = this.datepicker.touchUi ? 'enter-dialog' : 'enter-dropdown';
            }
            ngAfterViewInit() {
              this._subscriptions.add(
                this.datepicker.stateChanges.subscribe(() => {
                  this._changeDetectorRef.markForCheck();
                }),
              );
            }
            ngOnDestroy() {
              this._subscriptions.unsubscribe(), this._animationDone.complete();
            }
            onTimeChanged(e) {
              this._updateUserSelectionWithCalendarUserEvent({ value: e, event: null });
            }
            _handleUserSelection(e) {
              this._updateUserSelectionWithCalendarUserEvent(e),
                this.datepicker.hideTime &&
                  (!this._model || this._model.isComplete()) &&
                  !this._actionsPortal &&
                  this.datepicker.close();
            }
            _updateUserSelectionWithCalendarUserEvent(e) {
              const a = this._model.selection,
                i = e.value,
                r = a instanceof w;
              if (r && this._rangeSelectionStrategy) {
                const h = this._rangeSelectionStrategy.selectionFinished(i, a, e.event);
                this._model.updateSelection(h, this);
              } else {
                const h = this._dateAdapter.isSameTime(a, i),
                  I = this._dateAdapter.sameDate(i, a) && h;
                i && (r || !I) && this._model.add(i);
              }
            }
            _handleUserDragDrop(e) {
              this._model.updateSelection(e.value, this);
            }
            _startExitAnimation() {
              (this._animationState = 'void'), this._changeDetectorRef.markForCheck();
            }
            _handleAnimationEvent(e) {
              (this._isAnimating = 'start' === e.phaseName),
                this._isAnimating || this._animationDone.next();
            }
            _getSelected() {
              return (this._modelTime = this._model.selection), this._model.selection;
            }
            _applyPendingSelection() {
              this._model !== this._globalModel &&
                this._globalModel.updateSelection(this._model.selection, this);
            }
            _clearSelection() {
              this._globalModel.updateSelection(null, this);
            }
            _assignActions(e, a) {
              (this._model = e ? this._globalModel.clone() : this._globalModel),
                (this._actionsPortal = e),
                a && this._changeDetectorRef.detectChanges();
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(t.rXU(t.gRc), t.rXU(f), t.rXU(M.$), t.rXU(J, 8), t.rXU(te));
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [['ngx-mat-datepicker-content']],
              viewQuery: function (e, a) {
                1 & e && t.wEZ(a._calendar, ae, 5), 2 & e && t.NyB();
              },
              hostAttrs: [1, 'mat-datepicker-content'],
              hostVars: 11,
              hostBindings: function (e, a) {
                1 & e &&
                  t.Kam('@transformPanel.start', function (r) {
                    return a._handleAnimationEvent(r);
                  })('@transformPanel.done', function (r) {
                    return a._handleAnimationEvent(r);
                  }),
                  2 & e &&
                    (t.zvX('@transformPanel', a._animationState),
                    t.AVh('mat-datepicker-content-touch', a.datepicker.touchUi)(
                      'mat-datepicker-content-touch-with-time',
                      !a.datepicker.hideTime,
                    )('mat-primary', a.isPrimary)('mat-accent', a.isAccent)('mat-warn', a.isWarn));
              },
              inputs: { color: 'color' },
              exportAs: ['ngxMatDatepickerContent'],
              decls: 6,
              vars: 29,
              consts: [
                ['cdkTrapFocus', '', 'role', 'dialog', 1, 'mat-datepicker-content-container'],
                [
                  3,
                  'yearSelected',
                  'monthSelected',
                  'viewChanged',
                  '_userSelection',
                  '_userDragDrop',
                  'id',
                  'ngClass',
                  'startAt',
                  'startView',
                  'minDate',
                  'maxDate',
                  'dateFilter',
                  'headerComponent',
                  'selected',
                  'dateClass',
                  'comparisonStart',
                  'comparisonEnd',
                  'startDateAccessibleName',
                  'endDateAccessibleName',
                ],
                [3, 'cdkPortalOutlet'],
                [
                  'type',
                  'button',
                  'mat-raised-button',
                  '',
                  1,
                  'mat-datepicker-close-button',
                  3,
                  'focus',
                  'blur',
                  'click',
                  'color',
                ],
                [1, 'time-container', 3, 'disable-seconds'],
                [1, 'time-container'],
                [
                  3,
                  'ngModelChange',
                  'showSpinners',
                  'showSeconds',
                  'disabled',
                  'stepHour',
                  'stepMinute',
                  'stepSecond',
                  'ngModel',
                  'color',
                  'enableMeridian',
                  'disableMinute',
                ],
              ],
              template: function (e, a) {
                if (
                  (1 & e &&
                    (t.j41(0, 'div', 0)(1, 'ngx-mat-calendar', 1),
                    t.bIt('yearSelected', function (r) {
                      return a.datepicker._selectYear(r);
                    })('monthSelected', function (r) {
                      return a.datepicker._selectMonth(r);
                    })('viewChanged', function (r) {
                      return a.datepicker._viewChanged(r);
                    })('_userSelection', function (r) {
                      return a._handleUserSelection(r);
                    })('_userDragDrop', function (r) {
                      return a._handleUserDragDrop(r);
                    }),
                    t.k0s(),
                    t.DNE(2, Je, 1, 1)(3, et, 0, 0, 'ng-template', 2),
                    t.j41(4, 'button', 3),
                    t.bIt('focus', function () {
                      return (a._closeButtonFocused = !0);
                    })('blur', function () {
                      return (a._closeButtonFocused = !1);
                    })('click', function () {
                      return a.datepicker.close();
                    }),
                    t.EFF(5),
                    t.k0s()()),
                  2 & e)
                ) {
                  let i;
                  t.AVh(
                    'mat-datepicker-content-container-with-custom-header',
                    a.datepicker.calendarHeaderComponent(),
                  )('mat-datepicker-content-container-with-actions', a._actionsPortal)(
                    'mat-datepicker-content-container-with-time',
                    !a.datepicker._hideTime,
                  ),
                    t.BMQ('aria-modal', !0)(
                      'aria-labelledby',
                      null !== (i = a._dialogLabelId) && void 0 !== i ? i : void 0,
                    ),
                    t.R7$(),
                    t.Y8G('id', a.datepicker.id)('ngClass', a.datepicker.panelClass)(
                      'startAt',
                      a.datepicker.startAt,
                    )('startView', a.datepicker.startView())('minDate', a.datepicker._getMinDate())(
                      'maxDate',
                      a.datepicker._getMaxDate(),
                    )('dateFilter', a.datepicker._getDateFilter())(
                      'headerComponent',
                      a.datepicker.calendarHeaderComponent(),
                    )('selected', a._getSelected())('dateClass', a.datepicker.dateClass())(
                      'comparisonStart',
                      a.comparisonStart,
                    )('comparisonEnd', a.comparisonEnd)('@fadeInCalendar', 'enter')(
                      'startDateAccessibleName',
                      a.startDateAccessibleName,
                    )('endDateAccessibleName', a.endDateAccessibleName),
                    t.R7$(),
                    t.vxM(a.isViewMonth ? 2 : -1),
                    t.R7$(),
                    t.Y8G('cdkPortalOutlet', a._actionsPortal),
                    t.R7$(),
                    t.AVh('cdk-visually-hidden', !a._closeButtonFocused),
                    t.Y8G('color', a.color || 'primary'),
                    t.R7$(),
                    t.SpI(' ', a._closeButtonText, ' ');
                }
              },
              dependencies: [s.kB, ae, v.YU, qe.g, $.X1, $.BC, $.YN, $.vS, D.I3, k.$z],
              styles: [
                '.mat-datepicker-content{display:block;border-radius:4px;background-color:var(--mat-datepicker-calendar-container-background-color);color:var(--mat-datepicker-calendar-container-text-color);box-shadow:var(--mat-datepicker-calendar-container-elevation-shadow);border-radius:var(--mat-datepicker-calendar-container-shape)}.mat-datepicker-content .mat-calendar{font-family:var(--mat-datepicker-calendar-text-font);font-size:var(--mat-datepicker-calendar-text-size);width:296px;height:354px}.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar{height:auto}.mat-datepicker-content .mat-datepicker-close-button{position:absolute;top:100%;left:0;margin-top:8px}.ng-animating .mat-datepicker-content .mat-datepicker-close-button{display:none}.mat-datepicker-content-container{display:flex;flex-direction:column;justify-content:space-between}.time-container{display:flex;position:relative;padding-top:5px;justify-content:center}.time-container.disable-seconds .ngx-mat-timepicker .table{margin-left:9px}.time-container:before{content:"";position:absolute;top:0;left:0;right:0;height:1px;background-color:#0000001f}.mat-datepicker-content-touch{display:block;max-height:90vh;position:relative;overflow:visible}.mat-datepicker-content-touch .mat-datepicker-content-container{min-height:312px;max-height:815px;min-width:250px;max-width:750px}.mat-datepicker-content-touch .mat-calendar{width:100%;height:auto}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-datepicker-content-container{width:64vh;height:90vh}.mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time{height:auto;max-height:none}}@media all and (orientation: portrait){.mat-datepicker-content-touch{max-height:100vh}.mat-datepicker-content-touch .mat-datepicker-content-container{width:80vw;height:100vw}.mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time{height:auto;max-height:870px}.mat-datepicker-content-touch .mat-datepicker-content-container.mat-datepicker-content-container-with-time.mat-datepicker-content-container-with-actions{max-height:none!important}.mat-datepicker-content-touch .mat-datepicker-content-container-with-actions{height:115vw}}\n',
              ],
              encapsulation: 2,
              data: { animation: [Ce.transformPanel, Ce.fadeInCalendar] },
              changeDetection: 0,
            })),
            c
          );
        })(),
        z = (() => {
          var n;
          class c {
            get startAt() {
              return (
                this._startAt ||
                (this.datepickerInput ? this.datepickerInput.getStartValue() : null)
              );
            }
            set startAt(e) {
              this._startAt = this._dateAdapter.getValidDateOrNull(
                this._dateAdapter.deserialize(e),
              );
            }
            get color() {
              return (
                this._color ||
                (this.datepickerInput ? this.datepickerInput.getThemePalette() : void 0)
              );
            }
            set color(e) {
              this._color = e;
            }
            get touchUi() {
              return this._touchUi;
            }
            set touchUi(e) {
              this._touchUi = (0, j.he)(e);
            }
            get hideTime() {
              return this._hideTime;
            }
            set hideTime(e) {
              this._hideTime = (0, j.he)(e);
            }
            get disabled() {
              return void 0 === this._disabled && this.datepickerInput
                ? this.datepickerInput.disabled
                : !!this._disabled;
            }
            set disabled(e) {
              const a = (0, j.he)(e);
              a !== this._disabled && ((this._disabled = a), this.stateChanges.next(void 0));
            }
            get restoreFocus() {
              return this._restoreFocus;
            }
            set restoreFocus(e) {
              this._restoreFocus = (0, j.he)(e);
            }
            get panelClass() {
              return this._panelClass;
            }
            set panelClass(e) {
              this._panelClass = (0, j.cc)(e);
            }
            get opened() {
              return this._opened;
            }
            set opened(e) {
              (0, j.he)(e) ? this.open() : this.close();
            }
            get showSpinners() {
              return this._showSpinners;
            }
            set showSpinners(e) {
              this._showSpinners = e;
            }
            get showSeconds() {
              return this._showSeconds;
            }
            set showSeconds(e) {
              this._showSeconds = e;
            }
            get stepHour() {
              return this._stepHour;
            }
            set stepHour(e) {
              this._stepHour = e;
            }
            get stepMinute() {
              return this._stepMinute;
            }
            set stepMinute(e) {
              this._stepMinute = e;
            }
            get stepSecond() {
              return this._stepSecond;
            }
            set stepSecond(e) {
              this._stepSecond = e;
            }
            get enableMeridian() {
              return this._enableMeridian;
            }
            set enableMeridian(e) {
              this._enableMeridian = e;
            }
            get disableMinute() {
              return this._disableMinute;
            }
            set disableMinute(e) {
              this._disableMinute = e;
            }
            get defaultTime() {
              return this._defaultTime;
            }
            set defaultTime(e) {
              this._defaultTime = e;
            }
            _getMinDate() {
              return this.datepickerInput && this.datepickerInput.min;
            }
            _getMaxDate() {
              return this.datepickerInput && this.datepickerInput.max;
            }
            _getDateFilter() {
              return this.datepickerInput && this.datepickerInput.dateFilter;
            }
            constructor(e, a, i, r, h, u, I) {
              if (
                ((this._overlay = e),
                (this._ngZone = a),
                (this._viewContainerRef = i),
                (this._dateAdapter = h),
                (this._dir = u),
                (this._model = I),
                (this._inputStateChanges = B.yU.EMPTY),
                (this._document = (0, t.WQX)(v.qQ)),
                (this.calendarHeaderComponent = (0, t.hFB)()),
                (this.startView = (0, t.hFB)('month')),
                (this._touchUi = !1),
                (this._hideTime = !1),
                (this.xPosition = (0, t.hFB)('start')),
                (this.yPosition = (0, t.hFB)('below')),
                (this._restoreFocus = !0),
                (this.yearSelected = (0, t.CGW)()),
                (this.monthSelected = (0, t.CGW)()),
                (this.viewChanged = (0, t.CGW)()),
                (this.dateClass = (0, t.hFB)()),
                (this.openedStream = new t.bkB()),
                (this.closedStream = new t.bkB()),
                (this._opened = !1),
                (this._showSpinners = !0),
                (this._showSeconds = !1),
                (this._stepHour = be.nP),
                (this._stepMinute = be.nP),
                (this._stepSecond = be.nP),
                (this._enableMeridian = !1),
                (this.id = 'mat-datepicker-'.concat(tt++)),
                (this._focusedElementBeforeOpen = null),
                (this._backdropHarnessClass = ''.concat(this.id, '-backdrop')),
                (this.stateChanges = new S.B()),
                !this._dateAdapter)
              )
                throw T('DateAdapter');
              this._scrollStrategy = r;
            }
            ngOnChanges(e) {
              const a = e.xPosition || e.yPosition;
              if (a && !a.firstChange && this._overlayRef) {
                const i = this._overlayRef.getConfig().positionStrategy;
                i instanceof re.rW &&
                  (this._setConnectedPositions(i),
                  this.opened && this._overlayRef.updatePosition());
              }
              this.stateChanges.next(void 0);
            }
            ngOnDestroy() {
              this._destroyOverlay(),
                this.close(),
                this._inputStateChanges.unsubscribe(),
                this.stateChanges.complete();
            }
            select(e) {
              this._model.add(e);
            }
            _selectYear(e) {
              this.yearSelected.emit(e);
            }
            _selectMonth(e) {
              this.monthSelected.emit(e);
            }
            _viewChanged(e) {
              this.viewChanged.emit(e);
            }
            registerInput(e) {
              if (this.datepickerInput)
                throw Error('A MatDatepicker can only be associated with a single input.');
              return (
                this._inputStateChanges.unsubscribe(),
                (this.datepickerInput = e),
                (this._inputStateChanges = e.stateChanges.subscribe(() =>
                  this.stateChanges.next(void 0),
                )),
                this._model
              );
            }
            registerActions(e) {
              var a;
              if (this._actionsPortal)
                throw Error('A MatDatepicker can only be associated with a single actions row.');
              (this._actionsPortal = e),
                null === (a = this._componentRef) ||
                  void 0 === a ||
                  a.instance._assignActions(e, !0);
            }
            removeActions(e) {
              var a;
              e === this._actionsPortal &&
                ((this._actionsPortal = null),
                null === (a = this._componentRef) ||
                  void 0 === a ||
                  a.instance._assignActions(null, !0));
            }
            open() {
              var e;
              if (
                !(
                  this._opened ||
                  this.disabled ||
                  (null !== (e = this._componentRef) && void 0 !== e && e.instance._isAnimating)
                )
              ) {
                if (!this.datepickerInput)
                  throw Error('Attempted to open an MatDatepicker with no associated input.');
                (this._focusedElementBeforeOpen = (0, m.vc)()),
                  this._openOverlay(),
                  (this._opened = !0),
                  this.openedStream.emit();
              }
            }
            close() {
              var e;
              if (
                !this._opened ||
                (null !== (e = this._componentRef) && void 0 !== e && e.instance._isAnimating)
              )
                return;
              const a =
                  this._restoreFocus &&
                  this._focusedElementBeforeOpen &&
                  'function' == typeof this._focusedElementBeforeOpen.focus,
                i = () => {
                  this._opened && ((this._opened = !1), this.closedStream.emit());
                };
              if (this._componentRef) {
                const { instance: r, location: h } = this._componentRef;
                r._startExitAnimation(),
                  r._animationDone.pipe((0, _.s)(1)).subscribe(() => {
                    const u = this._document.activeElement;
                    a &&
                      (!u || u === this._document.activeElement || h.nativeElement.contains(u)) &&
                      this._focusedElementBeforeOpen.focus(),
                      (this._focusedElementBeforeOpen = null),
                      this._destroyOverlay();
                  });
              }
              a ? setTimeout(i) : i();
            }
            _applyPendingSelection() {
              var e;
              null === (e = this._componentRef) ||
                void 0 === e ||
                null === (e = e.instance) ||
                void 0 === e ||
                e._applyPendingSelection();
            }
            _clearSelection() {
              var e;
              null === (e = this._componentRef) ||
                void 0 === e ||
                null === (e = e.instance) ||
                void 0 === e ||
                e._clearSelection();
            }
            _forwardContentValues(e) {
              (e.datepicker = this),
                (e.color = this.color),
                (e._dialogLabelId = this.datepickerInput.getOverlayLabelId()),
                e._assignActions(this._actionsPortal, !1);
            }
            _openOverlay() {
              this._destroyOverlay();
              const e = this.touchUi,
                a = new D.A8(nt, this._viewContainerRef),
                i = (this._overlayRef = this._overlay.create(
                  new re.rR({
                    positionStrategy: e ? this._getDialogStrategy() : this._getDropdownStrategy(),
                    hasBackdrop: !0,
                    backdropClass: [
                      e ? 'cdk-overlay-dark-backdrop' : 'mat-overlay-transparent-backdrop',
                      this._backdropHarnessClass,
                    ],
                    direction: this._dir,
                    scrollStrategy: e
                      ? this._overlay.scrollStrategies.block()
                      : this._scrollStrategy(),
                    panelClass: 'mat-datepicker-'.concat(e ? 'dialog' : 'popup'),
                  }),
                ));
              this._getCloseStream(i).subscribe((r) => {
                r && r.preventDefault(), this.close();
              }),
                i.keydownEvents().subscribe((r) => {
                  const h = r.keyCode;
                  (h === p.i7 ||
                    h === p.n6 ||
                    h === p.UQ ||
                    h === p.LE ||
                    h === p.w_ ||
                    h === p.dB) &&
                    r.preventDefault();
                }),
                (this._componentRef = i.attach(a)),
                this._forwardContentValues(this._componentRef.instance),
                e || this._ngZone.onStable.pipe((0, _.s)(1)).subscribe(() => i.updatePosition());
            }
            _destroyOverlay() {
              this._overlayRef &&
                (this._overlayRef.dispose(), (this._overlayRef = this._componentRef = null));
            }
            _getDialogStrategy() {
              return this._overlay.position().global().centerHorizontally().centerVertically();
            }
            _getDropdownStrategy() {
              const e = this._overlay
                .position()
                .flexibleConnectedTo(this.datepickerInput.getConnectedOverlayOrigin())
                .withTransformOriginOn('.mat-datepicker-content')
                .withFlexibleDimensions(!1)
                .withViewportMargin(8)
                .withLockedPosition();
              return this._setConnectedPositions(e);
            }
            _setConnectedPositions(e) {
              const a = 'end' === this.xPosition() ? 'end' : 'start',
                i = 'start' === a ? 'end' : 'start',
                r = 'above' === this.yPosition() ? 'bottom' : 'top',
                h = 'top' === r ? 'bottom' : 'top';
              return e.withPositions([
                { originX: a, originY: h, overlayX: a, overlayY: r },
                { originX: a, originY: r, overlayX: a, overlayY: h },
                { originX: i, originY: h, overlayX: i, overlayY: r },
                { originX: i, originY: r, overlayX: i, overlayY: h },
              ]);
            }
            _getCloseStream(e) {
              const a = ['ctrlKey', 'shiftKey', 'metaKey'];
              return (0, ge.h)(
                e.backdropClick(),
                e.detachments(),
                e
                  .keydownEvents()
                  .pipe(
                    (0, Qe.p)(
                      (i) =>
                        (i.keyCode === p._f && !(0, p.rp)(i)) ||
                        (this.datepickerInput &&
                          (0, p.rp)(i, 'altKey') &&
                          i.keyCode === p.i7 &&
                          a.every((r) => !(0, p.rp)(i, r))),
                    ),
                  ),
              );
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(
                t.rXU(re.hJ),
                t.rXU(t.SKi),
                t.rXU(t.c1b),
                t.rXU(Me),
                t.rXU(M.$, 8),
                t.rXU(ee.dS, 8),
                t.rXU(f),
              );
            }),
            (n.ɵdir = t.FsC({
              type: n,
              inputs: {
                calendarHeaderComponent: [1, 'calendarHeaderComponent'],
                startAt: 'startAt',
                startView: [1, 'startView'],
                color: 'color',
                touchUi: 'touchUi',
                hideTime: 'hideTime',
                disabled: 'disabled',
                xPosition: [1, 'xPosition'],
                yPosition: [1, 'yPosition'],
                restoreFocus: 'restoreFocus',
                dateClass: [1, 'dateClass'],
                panelClass: 'panelClass',
                opened: 'opened',
                showSpinners: 'showSpinners',
                showSeconds: 'showSeconds',
                stepHour: 'stepHour',
                stepMinute: 'stepMinute',
                stepSecond: 'stepSecond',
                enableMeridian: 'enableMeridian',
                disableMinute: 'disableMinute',
                defaultTime: 'defaultTime',
              },
              outputs: {
                yearSelected: 'yearSelected',
                monthSelected: 'monthSelected',
                viewChanged: 'viewChanged',
                openedStream: 'opened',
                closedStream: 'closed',
              },
              features: [t.OA$],
            })),
            c
          );
        })(),
        rt = (() => {
          var n;
          class c extends z {}
          return (
            ((n = c).ɵfac = (() => {
              let o;
              return function (a) {
                return (o || (o = t.xGo(n)))(a || n);
              };
            })()),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [['ngx-mat-datetime-picker']],
              exportAs: ['ngxMatDatetimePicker'],
              features: [t.Jv_([U, it, { provide: z, useExisting: n }]), t.Vt3],
              decls: 0,
              vars: 0,
              template: function (e, a) {},
              encapsulation: 2,
              changeDetection: 0,
            })),
            c
          );
        })();
      const st = ['*'];
      function ot(n, c) {
        1 & n && (t.j41(0, 'div', 0), t.SdG(1), t.k0s());
      }
      let ct = (() => {
          var n;
          class c {
            constructor(e) {
              this._datepicker = e;
            }
            _applySelection() {
              this._datepicker._applyPendingSelection(), this._datepicker.close();
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(t.rXU(z));
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [
                ['', 'ngxMatDatepickerApply', ''],
                ['', 'ngxMatDateRangePickerApply', ''],
              ],
              hostBindings: function (e, a) {
                1 & e &&
                  t.bIt('click', function () {
                    return a._applySelection();
                  });
              },
            })),
            c
          );
        })(),
        dt = (() => {
          var n;
          class c {
            constructor(e) {
              (this._datepicker = e), (this.close = !1);
            }
            _clearSelection() {
              this._datepicker._clearSelection(), this.close && this._datepicker.close();
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(t.rXU(z));
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [
                ['', 'ngxMatDatepickerClear', ''],
                ['', 'ngxMatDateRangePickerClear', ''],
              ],
              hostBindings: function (e, a) {
                1 & e &&
                  t.bIt('click', function () {
                    return a._clearSelection();
                  });
              },
              inputs: { close: [2, 'close', 'close', t.L39] },
              features: [t.GFd],
            })),
            c
          );
        })(),
        lt = (() => {
          var n;
          class c {
            constructor(e) {
              this._datepicker = e;
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(t.rXU(z));
            }),
            (n.ɵdir = t.FsC({
              type: n,
              selectors: [
                ['', 'ngxMatDatepickerCancel', ''],
                ['', 'ngxMatDateRangePickerCancel', ''],
              ],
              hostBindings: function (e, a) {
                1 & e &&
                  t.bIt('click', function () {
                    return a._datepicker.close();
                  });
              },
            })),
            c
          );
        })(),
        ht = (() => {
          var n;
          class c {
            constructor(e, a) {
              (this._datepicker = e),
                (this._viewContainerRef = a),
                (this._template = (0, t.ebz)(t.C4Q));
            }
            ngAfterViewInit() {
              (this._portal = new D.VA(this._template(), this._viewContainerRef)),
                this._datepicker.registerActions(this._portal);
            }
            ngOnDestroy() {
              var e;
              this._datepicker.removeActions(this._portal),
                this._portal &&
                  this._portal.isAttached &&
                  (null === (e = this._portal) || void 0 === e || e.detach());
            }
          }
          return (
            ((n = c).ɵfac = function (e) {
              return new (e || n)(t.rXU(z), t.rXU(t.c1b));
            }),
            (n.ɵcmp = t.VBU({
              type: n,
              selectors: [['ngx-mat-datepicker-actions'], ['ngx-mat-date-range-picker-actions']],
              viewQuery: function (e, a) {
                1 & e && t.wEZ(a._template, t.C4Q, 5), 2 & e && t.NyB();
              },
              ngContentSelectors: st,
              decls: 1,
              vars: 0,
              consts: [[1, 'mat-datepicker-actions']],
              template: function (e, a) {
                1 & e && (t.NAR(), t.DNE(0, ot, 2, 0, 'ng-template'));
              },
              styles: [
                '.mat-datepicker-actions{display:flex;justify-content:flex-end;align-items:center;padding:8px}.mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-datepicker-actions .mat-mdc-button-base+.mat-mdc-button-base{margin-left:0;margin-right:8px}\n',
              ],
              encapsulation: 2,
              changeDetection: 0,
            })),
            c
          );
        })();
      var _t = g(9836),
        mt = g(5246);
      const ut = { provide: $.kq, useExisting: (0, t.Rfq)(() => fe), multi: !0 },
        pt = { provide: $.cz, useExisting: (0, t.Rfq)(() => fe), multi: !0 };
      let fe = (() => {
        var n;
        class c extends We {
          set ngxMatDatetimePicker(e) {
            e &&
              ((this._datepicker = e),
              (this._closedSubscription = e.closedStream.subscribe(() => this._onTouched())),
              this._registerModel(e.registerInput(this)));
          }
          get min() {
            return this._min;
          }
          set min(e) {
            const a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));
            this._dateAdapter.sameDate(a, this._min) ||
              ((this._min = a), this._validatorOnChange());
          }
          get max() {
            return this._max;
          }
          set max(e) {
            const a = this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));
            this._dateAdapter.sameDate(a, this._max) ||
              ((this._max = a), this._validatorOnChange());
          }
          get dateFilter() {
            return this._dateFilter;
          }
          set dateFilter(e) {
            const a = this._matchesFilter(this.value);
            (this._dateFilter = e),
              this._matchesFilter(this.value) !== a && this._validatorOnChange();
          }
          constructor(e, a, i, r) {
            super(e, a, i),
              (this._formField = r),
              (this._closedSubscription = B.yU.EMPTY),
              (this._validator = $.k0.compose(super._getValidators()));
          }
          getConnectedOverlayOrigin() {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
          }
          getOverlayLabelId() {
            return this._formField
              ? this._formField.getLabelId()
              : this._elementRef.nativeElement.getAttribute('aria-labelledby');
          }
          getThemePalette() {
            return this._formField ? this._formField.color : void 0;
          }
          getStartValue() {
            return this.value;
          }
          ngOnDestroy() {
            super.ngOnDestroy(), this._closedSubscription.unsubscribe();
          }
          _openPopup() {
            this._datepicker && this._datepicker.open();
          }
          _getValueFromModel(e) {
            return e;
          }
          _assignValueToModel(e) {
            this._model && this._model.updateSelection(e, this);
          }
          _getMinDate() {
            return this._min;
          }
          _getMaxDate() {
            return this._max;
          }
          _getDateFilter() {
            return this._dateFilter;
          }
          _shouldHandleChangeEvent(e) {
            return e.source !== this;
          }
        }
        return (
          ((n = c).ɵfac = function (e) {
            return new (e || n)(t.rXU(t.aKT), t.rXU(M.$, 8), t.rXU(E, 8), t.rXU(_t.xb, 8));
          }),
          (n.ɵdir = t.FsC({
            type: n,
            selectors: [['input', 'ngxMatDatetimePicker', '']],
            hostAttrs: [1, 'mat-datepicker-input'],
            hostVars: 6,
            hostBindings: function (e, a) {
              1 & e &&
                t.bIt('input', function (r) {
                  return a._onInput(r.target.value);
                })('change', function () {
                  return a._onChange();
                })('blur', function () {
                  return a._onBlur();
                })('keydown', function (r) {
                  return a._onKeydown(r);
                }),
                2 & e &&
                  (t.Mr5('disabled', a.disabled),
                  t.BMQ('aria-haspopup', a._datepicker ? 'dialog' : null)(
                    'aria-owns',
                    ((null == a._datepicker ? null : a._datepicker.opened) && a._datepicker.id) ||
                      null,
                  )('min', a.min ? a._dateAdapter.toIso8601(a.min) : null)(
                    'max',
                    a.max ? a._dateAdapter.toIso8601(a.max) : null,
                  )('data-mat-calendar', a._datepicker ? a._datepicker.id : null));
            },
            inputs: {
              ngxMatDatetimePicker: 'ngxMatDatetimePicker',
              min: 'min',
              max: 'max',
              dateFilter: [0, 'matDatepickerFilter', 'dateFilter'],
            },
            exportAs: ['ngxMatDatepickerInput'],
            features: [t.Jv_([ut, pt, { provide: mt.Oh, useExisting: n }]), t.Vt3],
          })),
          c
        );
      })();
      var ke = g(356);
      const gt = ['button'],
        bt = [[['', 'ngxMatDatepickerToggleIcon', '']]],
        ft = ['[ngxMatDatepickerToggleIcon]'];
      function kt(n, c) {
        1 & n && (t.qSk(), t.j41(0, 'svg', 2), t.nrm(1, 'path', 3), t.k0s());
      }
      let vt = (() => {
        var n;
        class c {
          get disabled() {
            return void 0 === this._disabled && this.datepicker()
              ? this.datepicker().disabled
              : !!this._disabled;
          }
          set disabled(e) {
            this._disabled = (0, j.he)(e);
          }
          constructor(e, a, i) {
            (this._intl = e),
              (this._changeDetectorRef = a),
              (this._stateChanges = B.yU.EMPTY),
              (this.datepicker = (0, t.hFB)(void 0, { alias: 'for' })),
              (this.tabIndex = null),
              (this.ariaLabel = (0, t.hFB)(void 0, { alias: 'aria-label' })),
              (this.disableRipple = (0, t.hFB)()),
              (this._button = (0, t.ebz)('button'));
            const r = Number(i);
            (this.tabIndex = r || 0 === r ? r : null),
              (0, t.QZP)(() => {
                this.datepicker(), (0, t.O8t)(() => this._watchStateChanges());
              });
          }
          ngOnDestroy() {
            this._stateChanges.unsubscribe();
          }
          ngAfterContentInit() {
            this._watchStateChanges();
          }
          _open(e) {
            this.datepicker() && !this.disabled && (this.datepicker().open(), e.stopPropagation());
          }
          _watchStateChanges() {
            const e = this.datepicker() ? this.datepicker().stateChanges : (0, ke.of)(),
              a =
                this.datepicker() && this.datepicker().datepickerInput
                  ? this.datepicker().datepickerInput.stateChanges
                  : (0, ke.of)(),
              i = this.datepicker()
                ? (0, ge.h)(this.datepicker().openedStream, this.datepicker().closedStream)
                : (0, ke.of)();
            this._stateChanges.unsubscribe(),
              (this._stateChanges = (0, ge.h)(this._intl.changes, e, a, i).subscribe(() =>
                this._changeDetectorRef.markForCheck(),
              ));
          }
        }
        return (
          ((n = c).ɵfac = function (e) {
            return new (e || n)(t.rXU(te), t.rXU(t.gRc), t.kS0('tabindex'));
          }),
          (n.ɵcmp = t.VBU({
            type: n,
            selectors: [['ngx-mat-datepicker-toggle']],
            viewQuery: function (e, a) {
              1 & e && t.wEZ(a._button, gt, 5), 2 & e && t.NyB();
            },
            hostAttrs: [1, 'mat-datepicker-toggle'],
            hostVars: 8,
            hostBindings: function (e, a) {
              1 & e &&
                t.bIt('click', function (r) {
                  return a._open(r);
                }),
                2 & e &&
                  (t.BMQ('tabindex', null)(
                    'data-mat-calendar',
                    a.datepicker ? a.datepicker.id : null,
                  ),
                  t.AVh('mat-datepicker-toggle-active', a.datepicker && a.datepicker.opened)(
                    'mat-accent',
                    a.datepicker && 'accent' === a.datepicker.color,
                  )('mat-warn', a.datepicker && 'warn' === a.datepicker.color));
            },
            inputs: {
              datepicker: [1, 'for', 'datepicker'],
              tabIndex: 'tabIndex',
              ariaLabel: [1, 'aria-label', 'ariaLabel'],
              disabled: 'disabled',
              disableRipple: [1, 'disableRipple'],
            },
            exportAs: ['ngxMatDatepickerToggle'],
            ngContentSelectors: ft,
            decls: 4,
            vars: 5,
            consts: [
              ['button', ''],
              ['mat-icon-button', '', 'type', 'button', 3, 'disabled', 'disableRipple'],
              [
                'viewBox',
                '0 0 24 24',
                'width',
                '24px',
                'height',
                '24px',
                'fill',
                'currentColor',
                'focusable',
                'false',
                1,
                'mat-datepicker-toggle-default-icon',
              ],
              [
                'd',
                'M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z',
              ],
            ],
            template: function (e, a) {
              1 & e && (t.NAR(bt), t.j41(0, 'button', 1, 0), t.SdG(2, 0, null, kt, 2, 0), t.k0s()),
                2 & e &&
                  (t.Y8G('disabled', a.disabled)('disableRipple', a.disableRipple()),
                  t.BMQ('aria-haspopup', a.datepicker() ? 'dialog' : null)(
                    'aria-label',
                    a.ariaLabel() || a._intl.openCalendarLabel,
                  )('tabindex', a.disabled ? -1 : a.tabIndex));
            },
            dependencies: [k.iY],
            styles: [
              '.mat-datepicker-toggle{pointer-events:auto}@media (forced-colors: active){.mat-datepicker-toggle-default-icon{color:CanvasText}}\n',
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          c
        );
      })();
    },
    6129: (Z, P, g) => {
      g.d(P, { $: () => D });
      var s = g(1586);
      class D extends s.MJ {
        isSameTime(x, k) {
          return (
            null == x ||
            null == k ||
            (this.getHour(x) === this.getHour(k) &&
              this.getMinute(x) === this.getMinute(k) &&
              this.getSecond(x) === this.getSecond(k))
          );
        }
        copyTime(x, k) {
          this.setHour(x, this.getHour(k)),
            this.setMinute(x, this.getMinute(k)),
            this.setSecond(x, this.getSecond(k));
        }
        compareDateWithTime(x, k, S) {
          let E =
            super.compareDate(x, k) ||
            this.getHour(x) - this.getHour(k) ||
            this.getMinute(x) - this.getMinute(k);
          return S && (E = E || this.getSecond(x) - this.getSecond(k)), E;
        }
        setTimeByDefaultValues(x, k) {
          if (!Array.isArray(k)) throw Error('@Input DefaultTime should be an array');
          this.setHour(x, k[0] || 0), this.setMinute(x, k[1] || 0), this.setSecond(x, k[2] || 0);
        }
      }
    },
    7949: (Z, P, g) => {
      g.d(P, { g: () => L });
      var s = g(963),
        D = g(8893),
        t = g(5299),
        x = g(9836),
        k = g(6858),
        S = g(5246),
        E = g(8173),
        M = g(1796),
        w = g(5543),
        f = g(7137),
        F = g(6129);
      function y(m, v) {
        if (1 & m) {
          const _ = s.RV6();
          s.j41(0, 'td')(1, 'button', 7),
            s.bIt('click', function () {
              s.eBV(_);
              const l = s.XpG(2);
              return s.Njj(l.change('second', !0));
            }),
            s.j41(2, 'mat-icon'),
            s.qSk(),
            s.j41(3, 'svg', 8),
            s.nrm(4, 'path', 9),
            s.k0s()()()();
        }
        if (2 & m) {
          const _ = s.XpG(2);
          s.R7$(), s.Y8G('disabled', _.disabled() || _.disableMinute());
        }
      }
      function Q(m, v) {
        1 & m && s.nrm(0, 'td', 5)(1, 'td');
      }
      function U(m, v) {
        if (1 & m) {
          const _ = s.RV6();
          s.j41(0, 'tr')(1, 'td')(2, 'button', 7),
            s.bIt('click', function () {
              s.eBV(_);
              const l = s.XpG();
              return s.Njj(l.change('hour', !0));
            }),
            s.j41(3, 'mat-icon'),
            s.qSk(),
            s.j41(4, 'svg', 8),
            s.nrm(5, 'path', 9),
            s.k0s()()()(),
            s.joV(),
            s.nrm(6, 'td'),
            s.j41(7, 'td')(8, 'button', 7),
            s.bIt('click', function () {
              s.eBV(_);
              const l = s.XpG();
              return s.Njj(l.change('minute', !0));
            }),
            s.j41(9, 'mat-icon'),
            s.qSk(),
            s.j41(10, 'svg', 8),
            s.nrm(11, 'path', 9),
            s.k0s()()()(),
            s.joV(),
            s.nrm(12, 'td'),
            s.DNE(13, y, 5, 1, 'td')(14, Q, 2, 0),
            s.k0s();
        }
        if (2 & m) {
          const _ = s.XpG();
          s.R7$(2),
            s.Y8G('disabled', _.disabled()),
            s.R7$(6),
            s.Y8G('disabled', _.disabled() || _.disableMinute()),
            s.R7$(5),
            s.vxM(_.showSeconds() ? 13 : -1),
            s.R7$(),
            s.vxM(_.enableMeridian() ? 14 : -1);
        }
      }
      function X(m, v) {
        if (1 & m) {
          const _ = s.RV6();
          s.j41(0, 'td', 5),
            s.EFF(1, ':'),
            s.k0s(),
            s.j41(2, 'td')(3, 'mat-form-field', 3)(4, 'input', 10),
            s.bIt('input', function (l) {
              s.eBV(_);
              const b = s.XpG();
              return s.Njj(b.formatInput(l.target));
            })('keydown.ArrowUp', function (l) {
              return s.eBV(_), s.XpG().change('second', !0), s.Njj(l.preventDefault());
            })('keydown.ArrowDown', function (l) {
              return s.eBV(_), s.XpG().change('second', !1), s.Njj(l.preventDefault());
            })('blur', function () {
              s.eBV(_);
              const l = s.XpG();
              return s.Njj(l.change('second'));
            }),
            s.k0s()()();
        }
        if (2 & m) {
          const _ = s.XpG();
          s.R7$(3), s.Y8G('color', _.color());
        }
      }
      function H(m, v) {
        if (1 & m) {
          const _ = s.RV6();
          s.nrm(0, 'td', 5),
            s.j41(1, 'td', 11)(2, 'button', 12),
            s.bIt('click', function () {
              s.eBV(_);
              const l = s.XpG();
              return s.Njj(l.toggleMeridian());
            }),
            s.EFF(3),
            s.k0s()();
        }
        if (2 & m) {
          const _ = s.XpG();
          s.R7$(2),
            s.Y8G('color', _.color())('disabled', _.disabled()),
            s.R7$(),
            s.SpI(' ', _.meridian, ' ');
        }
      }
      function T(m, v) {
        if (1 & m) {
          const _ = s.RV6();
          s.nrm(0, 'td'),
            s.j41(1, 'td')(2, 'button', 13),
            s.bIt('click', function () {
              s.eBV(_);
              const l = s.XpG(2);
              return s.Njj(l.change('second', !1));
            }),
            s.j41(3, 'mat-icon'),
            s.qSk(),
            s.j41(4, 'svg', 8),
            s.nrm(5, 'path', 14),
            s.k0s()()()();
        }
        if (2 & m) {
          const _ = s.XpG(2);
          s.R7$(2), s.Y8G('disabled', _.disabled() || _.disableMinute());
        }
      }
      function p(m, v) {
        1 & m && s.nrm(0, 'td', 5)(1, 'td');
      }
      function B(m, v) {
        if (1 & m) {
          const _ = s.RV6();
          s.j41(0, 'tr')(1, 'td')(2, 'button', 13),
            s.bIt('click', function () {
              s.eBV(_);
              const l = s.XpG();
              return s.Njj(l.change('hour', !1));
            }),
            s.j41(3, 'mat-icon'),
            s.qSk(),
            s.j41(4, 'svg', 8),
            s.nrm(5, 'path', 14),
            s.k0s()()()(),
            s.joV(),
            s.nrm(6, 'td'),
            s.j41(7, 'td')(8, 'button', 13),
            s.bIt('click', function () {
              s.eBV(_);
              const l = s.XpG();
              return s.Njj(l.change('minute', !1));
            }),
            s.j41(9, 'mat-icon'),
            s.qSk(),
            s.j41(10, 'svg', 8),
            s.nrm(11, 'path', 14),
            s.k0s()()()(),
            s.DNE(12, T, 6, 1)(13, p, 2, 0),
            s.k0s();
        }
        if (2 & m) {
          const _ = s.XpG();
          s.R7$(2),
            s.Y8G('disabled', _.disabled()),
            s.R7$(6),
            s.Y8G('disabled', _.disabled() || _.disableMinute()),
            s.R7$(4),
            s.vxM(_.showSeconds() ? 12 : -1),
            s.R7$(),
            s.vxM(_.enableMeridian() ? 13 : -1);
        }
      }
      let L = (() => {
        var m;
        class v {
          get hour() {
            let d = Number(this.form.controls.hour.value);
            return Number.isNaN(d) ? 0 : d;
          }
          get minute() {
            let d = Number(this.form.controls.minute.value);
            return Number.isNaN(d) ? 0 : d;
          }
          get second() {
            let d = Number(this.form.controls.second.value);
            return Number.isNaN(d) ? 0 : d;
          }
          get valid() {
            return this.form.valid;
          }
          constructor(d, l, b) {
            if (
              ((this._dateAdapter = d),
              (this.cd = l),
              (this.formBuilder = b),
              (this.disabled = (0, s.hFB)(!1)),
              (this.showSpinners = (0, s.hFB)(!0)),
              (this.stepHour = (0, s.hFB)(f.nP)),
              (this.stepMinute = (0, s.hFB)(f.nP)),
              (this.stepSecond = (0, s.hFB)(f.nP)),
              (this.showSeconds = (0, s.hFB)(!1)),
              (this.disableMinute = (0, s.hFB)(!1)),
              (this.enableMeridian = (0, s.hFB)(!1)),
              (this.defaultTime = (0, s.hFB)()),
              (this.color = (0, s.hFB)('primary')),
              (this.meridian = f.Jn.AM),
              (this._onChange = () => {}),
              (this._onTouched = () => {}),
              (this._destroyed = new E.B()),
              (this.pattern = f.vV),
              !this._dateAdapter)
            )
              throw (0, f.lG)('DateAdapter');
            this.form = this.formBuilder.group({
              hour: [
                { value: null, disabled: this.disabled() },
                [D.k0.required, D.k0.pattern(f.vV)],
              ],
              minute: [
                { value: null, disabled: this.disabled() },
                [D.k0.required, D.k0.pattern(f.Zr)],
              ],
              second: [
                { value: null, disabled: this.disabled() },
                [D.k0.required, D.k0.pattern(f.ph)],
              ],
            });
          }
          ngOnInit() {
            this.form.valueChanges.pipe((0, M.Q)(this._destroyed), (0, w.B)(400)).subscribe((d) => {
              this._updateModel();
            });
          }
          ngOnChanges(d) {
            (d.disabled || d.disableMinute) && this._setDisableStates();
          }
          ngOnDestroy() {
            this._destroyed.next(), this._destroyed.complete();
          }
          writeValue(d) {
            null != d && ((this._model = d), this._updateHourMinuteSecond());
          }
          registerOnChange(d) {
            this._onChange = d;
          }
          registerOnTouched(d) {
            this._onTouched = d;
          }
          setDisabledState(d) {
            (this._disabled = d), this.cd.markForCheck();
          }
          formatInput(d) {
            d.value = d.value.replace(f.uU, '');
          }
          toggleMeridian() {
            (this.meridian = this.meridian === f.Jn.AM ? f.Jn.PM : f.Jn.AM), this.change('hour');
          }
          change(d, l) {
            const b = this._getNextValueByProp(d, l);
            this.form.controls[d].setValue((0, f.NW)(b), { onlySelf: !1, emitEvent: !1 }),
              this._updateModel();
          }
          _updateHourMinuteSecond() {
            let d = this._dateAdapter.getHour(this._model);
            const l = this._dateAdapter.getMinute(this._model),
              b = this._dateAdapter.getSecond(this._model);
            this.enableMeridian() &&
              (d >= f.nb.meridian
                ? ((d -= f.nb.meridian), (this.meridian = f.Jn.PM))
                : (this.meridian = f.Jn.AM),
              0 === d && (d = f.nb.meridian)),
              this.form.patchValue(
                { hour: (0, f.NW)(d), minute: (0, f.NW)(l), second: (0, f.NW)(b) },
                { emitEvent: !1 },
              );
          }
          _updateModel() {
            let d = this.hour;
            if (
              (this.enableMeridian() &&
                (this.meridian === f.Jn.AM && d === f.nb.meridian
                  ? (d = 0)
                  : this.meridian === f.Jn.PM && d !== f.nb.meridian && (d += f.nb.meridian)),
              this._model)
            ) {
              const l = this._dateAdapter.clone(this._model);
              this._dateAdapter.setHour(l, d),
                this._dateAdapter.setMinute(l, this.minute),
                this._dateAdapter.setSecond(l, this.second),
                this._onChange(l);
            }
          }
          _getNextValueByProp(d, l) {
            const b = d[0].toUpperCase() + d.slice(1),
              C = f.nb['min'.concat(b)];
            let A,
              V = f.nb['max'.concat(b)];
            return (
              'hour' === d && this.enableMeridian() && (V = f.nb.meridian),
              null == l
                ? ((A = this[d] % V), 'hour' === d && this.enableMeridian() && 0 === A && (A = V))
                : ((A = l
                    ? this[d] + this['step'.concat(b)]()
                    : this[d] - this['step'.concat(b)]()),
                  'hour' === d && this.enableMeridian()
                    ? ((A %= V + 1), 0 === A && (A = l ? 1 : V))
                    : (A %= V),
                  (A = l ? (A > V ? A - V + C : A) : A < C ? A - C + V : A)),
              A
            );
          }
          _setDisableStates() {
            this.disabled()
              ? this.form.disable()
              : (this.form.enable(),
                this.disableMinute() &&
                  (this.form.get('minute').disable(),
                  this.showSeconds() && this.form.get('second').disable()));
          }
        }
        return (
          ((m = v).ɵfac = function (d) {
            return new (d || m)(s.rXU(F.$, 8), s.rXU(s.gRc), s.rXU(D.ok));
          }),
          (m.ɵcmp = s.VBU({
            type: m,
            selectors: [['ngx-mat-timepicker']],
            hostAttrs: [1, 'ngx-mat-timepicker'],
            inputs: {
              disabled: [1, 'disabled'],
              showSpinners: [1, 'showSpinners'],
              stepHour: [1, 'stepHour'],
              stepMinute: [1, 'stepMinute'],
              stepSecond: [1, 'stepSecond'],
              showSeconds: [1, 'showSeconds'],
              disableMinute: [1, 'disableMinute'],
              enableMeridian: [1, 'enableMeridian'],
              defaultTime: [1, 'defaultTime'],
              color: [1, 'color'],
            },
            exportAs: ['ngxMatTimepicker'],
            features: [
              s.Jv_([{ provide: D.kq, useExisting: (0, s.Rfq)(() => m), multi: !0 }]),
              s.OA$,
            ],
            decls: 16,
            vars: 7,
            consts: [
              [3, 'formGroup'],
              [1, 'ngx-mat-timepicker-table'],
              [1, 'ngx-mat-timepicker-tbody'],
              ['appearance', 'fill', 3, 'color'],
              [
                'type',
                'text',
                'matInput',
                '',
                'maxlength',
                '2',
                'formControlName',
                'hour',
                3,
                'input',
                'keydown.ArrowUp',
                'keydown.ArrowDown',
                'blur',
              ],
              [1, 'ngx-mat-timepicker-spacer'],
              [
                'type',
                'text',
                'matInput',
                '',
                'maxlength',
                '2',
                'formControlName',
                'minute',
                3,
                'input',
                'keydown.ArrowUp',
                'keydown.ArrowDown',
                'blur',
              ],
              [
                'type',
                'button',
                'mat-icon-button',
                '',
                'aria-label',
                'expand_less icon',
                3,
                'click',
                'disabled',
              ],
              [
                'viewBox',
                '0 0 24 24',
                'fill',
                'none',
                'stroke',
                '#000000',
                'stroke-width',
                '2',
                'stroke-linecap',
                'round',
                'stroke-linejoin',
                'round',
              ],
              ['d', 'M18 15l-6-6-6 6'],
              [
                'type',
                'text',
                'matInput',
                '',
                'maxlength',
                '2',
                'formControlName',
                'second',
                3,
                'input',
                'keydown.ArrowUp',
                'keydown.ArrowDown',
                'blur',
              ],
              [1, 'ngx-mat-timepicker-meridian'],
              ['mat-button', '', 'mat-stroked-button', '', 3, 'click', 'color', 'disabled'],
              [
                'type',
                'button',
                'mat-icon-button',
                '',
                'aria-label',
                'keyboard_arrow_down icon',
                3,
                'click',
                'disabled',
              ],
              ['d', 'M6 9l6 6 6-6'],
            ],
            template: function (d, l) {
              1 & d &&
                (s.j41(0, 'form', 0)(1, 'table', 1)(2, 'tbody', 2),
                s.DNE(3, U, 15, 4, 'tr'),
                s.j41(4, 'tr')(5, 'td')(6, 'mat-form-field', 3)(7, 'input', 4),
                s.bIt('input', function (C) {
                  return l.formatInput(C.target);
                })('keydown.ArrowUp', function (C) {
                  return l.change('hour', !0), C.preventDefault();
                })('keydown.ArrowDown', function (C) {
                  return l.change('hour', !1), C.preventDefault();
                })('blur', function () {
                  return l.change('hour');
                }),
                s.k0s()()(),
                s.j41(8, 'td', 5),
                s.EFF(9, ':'),
                s.k0s(),
                s.j41(10, 'td')(11, 'mat-form-field', 3)(12, 'input', 6),
                s.bIt('input', function (C) {
                  return l.formatInput(C.target);
                })('keydown.ArrowUp', function (C) {
                  return l.change('minute', !0), C.preventDefault();
                })('keydown.ArrowDown', function (C) {
                  return l.change('minute', !1), C.preventDefault();
                })('blur', function () {
                  return l.change('minute');
                }),
                s.k0s()()(),
                s.DNE(13, X, 5, 1)(14, H, 4, 3),
                s.k0s(),
                s.DNE(15, B, 14, 4, 'tr'),
                s.k0s()()()),
                2 & d &&
                  (s.Y8G('formGroup', l.form),
                  s.R7$(3),
                  s.vxM(l.showSpinners() ? 3 : -1),
                  s.R7$(3),
                  s.Y8G('color', l.color()),
                  s.R7$(5),
                  s.Y8G('color', l.color()),
                  s.R7$(2),
                  s.vxM(l.showSeconds() ? 13 : -1),
                  s.R7$(),
                  s.vxM(l.enableMeridian() ? 14 : -1),
                  s.R7$(),
                  s.vxM(l.showSpinners() ? 15 : -1));
            },
            dependencies: [
              D.X1,
              D.qT,
              D.me,
              D.BC,
              D.cb,
              D.tU,
              D.j4,
              D.JD,
              x.RG,
              x.rl,
              S.fS,
              S.fg,
              t.Hl,
              t.$z,
              t.iY,
              k.m_,
              k.An,
            ],
            styles: [
              '.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td{text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-spacer{font-weight:700}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td.ngx-mat-timepicker-meridian .mdc-button{min-width:64px;line-height:36px;min-width:0;border-radius:50%;width:36px;height:36px;padding:0;flex-shrink:0}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button{height:24px;width:24px;line-height:24px;padding:0}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button .mat-icon{font-size:24px}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-icon-button:disabled svg{stroke:var(--mdc-icon-button-disabled-icon-color)}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field{width:24px;max-width:24px;text-align:center}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field.mat-focused .mdc-text-field--filled .mat-mdc-form-field-focus-overlay,.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field:hover .mdc-text-field--filled .mat-mdc-form-field-focus-overlay{background-color:transparent}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled{background-color:transparent!important;padding:0!important}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix{padding:4px 0;min-height:1px!important}.ngx-mat-timepicker form .ngx-mat-timepicker-table .ngx-mat-timepicker-tbody tr td .mat-mdc-form-field .mdc-text-field--filled .mat-mdc-form-field-infix input{text-align:center;font-size:14px}\n',
            ],
            encapsulation: 2,
          })),
          v
        );
      })();
    },
    7137: (Z, P, g) => {
      g.d(P, {
        Jn: () => D,
        NW: () => M,
        Zr: () => S,
        lG: () => w,
        nP: () => t,
        nb: () => s,
        ph: () => E,
        uU: () => x,
        vV: () => k,
      });
      const s = {
          minHour: 0,
          maxHour: 24,
          minMinute: 0,
          maxMinute: 60,
          minSecond: 0,
          maxSecond: 60,
          meridian: 12,
        },
        D = { AM: 'AM', PM: 'PM' },
        t = 1,
        x = /[^0-9]/g,
        k = /^(2[0-3]|[0-1][0-9]|[0-9])$/,
        S = /^([0-5][0-9]|[0-9])$/,
        E = /^([0-5][0-9]|[0-9])$/;
      function M(F) {
        const y = F.toString();
        return y.length > 1 ? y : '0'.concat(y);
      }
      function w(F) {
        return Error(
          'NgxMatDatetimePicker: No provider found for '.concat(
            F,
            '. You must import one of the following ',
          ) +
            'modules at your application root: NgxMatNativeDateModule, NgxMatMomentModule, or provide a custom implementation.',
        );
      }
    },
    1292: (Z, P, g) => {
      g.d(P, { So: () => H, g7: () => L });
      var s = g(5732),
        D = g(8070),
        t = g(963),
        x = g(8893),
        k = g(1586),
        S = g(5296);
      const E = ['input'],
        M = ['label'],
        w = ['*'],
        f = new t.nKC('mat-checkbox-default-options', { providedIn: 'root', factory: F });
      function F() {
        return { color: 'accent', clickAction: 'check-indeterminate', disabledInteractive: !1 };
      }
      var y = (function (m) {
        return (
          (m[(m.Init = 0)] = 'Init'),
          (m[(m.Checked = 1)] = 'Checked'),
          (m[(m.Unchecked = 2)] = 'Unchecked'),
          (m[(m.Indeterminate = 3)] = 'Indeterminate'),
          m
        );
      })(y || {});
      const Q = { provide: x.kq, useExisting: (0, t.Rfq)(() => H), multi: !0 };
      class U {
        constructor() {
          (0, s.A)(this, 'source', void 0), (0, s.A)(this, 'checked', void 0);
        }
      }
      const X = F();
      let H = (() => {
          var m;
          class v {
            focus() {
              this._inputElement.nativeElement.focus();
            }
            _createChangeEvent(d) {
              const l = new U();
              return (l.source = this), (l.checked = d), l;
            }
            _getAnimationTargetElement() {
              var d;
              return null === (d = this._inputElement) || void 0 === d ? void 0 : d.nativeElement;
            }
            get inputId() {
              return ''.concat(this.id || this._uniqueId, '-input');
            }
            constructor() {
              var d, l;
              (0, s.A)(this, '_elementRef', (0, t.WQX)(t.aKT)),
                (0, s.A)(this, '_changeDetectorRef', (0, t.WQX)(t.gRc)),
                (0, s.A)(this, '_ngZone', (0, t.WQX)(t.SKi)),
                (0, s.A)(this, '_animationMode', (0, t.WQX)(t.bc$, { optional: !0 })),
                (0, s.A)(this, '_options', (0, t.WQX)(f, { optional: !0 })),
                (0, s.A)(this, '_animationClasses', {
                  uncheckedToChecked: 'mdc-checkbox--anim-unchecked-checked',
                  uncheckedToIndeterminate: 'mdc-checkbox--anim-unchecked-indeterminate',
                  checkedToUnchecked: 'mdc-checkbox--anim-checked-unchecked',
                  checkedToIndeterminate: 'mdc-checkbox--anim-checked-indeterminate',
                  indeterminateToChecked: 'mdc-checkbox--anim-indeterminate-checked',
                  indeterminateToUnchecked: 'mdc-checkbox--anim-indeterminate-unchecked',
                }),
                (0, s.A)(this, 'ariaLabel', ''),
                (0, s.A)(this, 'ariaLabelledby', null),
                (0, s.A)(this, 'ariaDescribedby', void 0),
                (0, s.A)(this, 'ariaExpanded', void 0),
                (0, s.A)(this, 'ariaControls', void 0),
                (0, s.A)(this, 'ariaOwns', void 0),
                (0, s.A)(this, '_uniqueId', void 0),
                (0, s.A)(this, 'id', void 0),
                (0, s.A)(this, 'required', void 0),
                (0, s.A)(this, 'labelPosition', 'after'),
                (0, s.A)(this, 'name', null),
                (0, s.A)(this, 'change', new t.bkB()),
                (0, s.A)(this, 'indeterminateChange', new t.bkB()),
                (0, s.A)(this, 'value', void 0),
                (0, s.A)(this, 'disableRipple', void 0),
                (0, s.A)(this, '_inputElement', void 0),
                (0, s.A)(this, '_labelElement', void 0),
                (0, s.A)(this, 'tabIndex', void 0),
                (0, s.A)(this, 'color', void 0),
                (0, s.A)(this, 'disabledInteractive', void 0),
                (0, s.A)(this, '_onTouched', () => {}),
                (0, s.A)(this, '_currentAnimationClass', ''),
                (0, s.A)(this, '_currentCheckState', y.Init),
                (0, s.A)(this, '_controlValueAccessorChangeFn', () => {}),
                (0, s.A)(this, '_validatorChangeFn', () => {}),
                (0, s.A)(this, '_checked', !1),
                (0, s.A)(this, '_disabled', !1),
                (0, s.A)(this, '_indeterminate', !1),
                (0, t.WQX)(S.l).load(k.Ah);
              const b = (0, t.WQX)(new t.ES_('tabindex'), { optional: !0 });
              (this._options = this._options || X),
                (this.color = this._options.color || X.color),
                (this.tabIndex = null == b ? 0 : parseInt(b) || 0),
                (this.id = this._uniqueId = (0, t.WQX)(D.g7).getId('mat-mdc-checkbox-')),
                (this.disabledInteractive =
                  null !==
                    (d =
                      null === (l = this._options) || void 0 === l
                        ? void 0
                        : l.disabledInteractive) &&
                  void 0 !== d &&
                  d);
            }
            ngOnChanges(d) {
              d.required && this._validatorChangeFn();
            }
            ngAfterViewInit() {
              this._syncIndeterminate(this._indeterminate);
            }
            get checked() {
              return this._checked;
            }
            set checked(d) {
              d != this.checked && ((this._checked = d), this._changeDetectorRef.markForCheck());
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(d) {
              d !== this.disabled && ((this._disabled = d), this._changeDetectorRef.markForCheck());
            }
            get indeterminate() {
              return this._indeterminate;
            }
            set indeterminate(d) {
              const l = d != this._indeterminate;
              (this._indeterminate = d),
                l &&
                  (this._transitionCheckState(
                    this._indeterminate ? y.Indeterminate : this.checked ? y.Checked : y.Unchecked,
                  ),
                  this.indeterminateChange.emit(this._indeterminate)),
                this._syncIndeterminate(this._indeterminate);
            }
            _isRippleDisabled() {
              return this.disableRipple || this.disabled;
            }
            _onLabelTextChange() {
              this._changeDetectorRef.detectChanges();
            }
            writeValue(d) {
              this.checked = !!d;
            }
            registerOnChange(d) {
              this._controlValueAccessorChangeFn = d;
            }
            registerOnTouched(d) {
              this._onTouched = d;
            }
            setDisabledState(d) {
              this.disabled = d;
            }
            validate(d) {
              return this.required && !0 !== d.value ? { required: !0 } : null;
            }
            registerOnValidatorChange(d) {
              this._validatorChangeFn = d;
            }
            _transitionCheckState(d) {
              let l = this._currentCheckState,
                b = this._getAnimationTargetElement();
              if (
                l !== d &&
                b &&
                (this._currentAnimationClass && b.classList.remove(this._currentAnimationClass),
                (this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(
                  l,
                  d,
                )),
                (this._currentCheckState = d),
                this._currentAnimationClass.length > 0)
              ) {
                b.classList.add(this._currentAnimationClass);
                const C = this._currentAnimationClass;
                this._ngZone.runOutsideAngular(() => {
                  setTimeout(() => {
                    b.classList.remove(C);
                  }, 1e3);
                });
              }
            }
            _emitChangeEvent() {
              this._controlValueAccessorChangeFn(this.checked),
                this.change.emit(this._createChangeEvent(this.checked)),
                this._inputElement && (this._inputElement.nativeElement.checked = this.checked);
            }
            toggle() {
              (this.checked = !this.checked), this._controlValueAccessorChangeFn(this.checked);
            }
            _handleInputClick() {
              var d;
              const l = null === (d = this._options) || void 0 === d ? void 0 : d.clickAction;
              this.disabled || 'noop' === l
                ? ((this.disabled && this.disabledInteractive) ||
                    (!this.disabled && 'noop' === l)) &&
                  ((this._inputElement.nativeElement.checked = this.checked),
                  (this._inputElement.nativeElement.indeterminate = this.indeterminate))
                : (this.indeterminate &&
                    'check' !== l &&
                    Promise.resolve().then(() => {
                      (this._indeterminate = !1),
                        this.indeterminateChange.emit(this._indeterminate);
                    }),
                  (this._checked = !this._checked),
                  this._transitionCheckState(this._checked ? y.Checked : y.Unchecked),
                  this._emitChangeEvent());
            }
            _onInteractionEvent(d) {
              d.stopPropagation();
            }
            _onBlur() {
              Promise.resolve().then(() => {
                this._onTouched(), this._changeDetectorRef.markForCheck();
              });
            }
            _getAnimationClassForCheckStateTransition(d, l) {
              if ('NoopAnimations' === this._animationMode) return '';
              switch (d) {
                case y.Init:
                  if (l === y.Checked) return this._animationClasses.uncheckedToChecked;
                  if (l == y.Indeterminate)
                    return this._checked
                      ? this._animationClasses.checkedToIndeterminate
                      : this._animationClasses.uncheckedToIndeterminate;
                  break;
                case y.Unchecked:
                  return l === y.Checked
                    ? this._animationClasses.uncheckedToChecked
                    : this._animationClasses.uncheckedToIndeterminate;
                case y.Checked:
                  return l === y.Unchecked
                    ? this._animationClasses.checkedToUnchecked
                    : this._animationClasses.checkedToIndeterminate;
                case y.Indeterminate:
                  return l === y.Checked
                    ? this._animationClasses.indeterminateToChecked
                    : this._animationClasses.indeterminateToUnchecked;
              }
              return '';
            }
            _syncIndeterminate(d) {
              const l = this._inputElement;
              l && (l.nativeElement.indeterminate = d);
            }
            _onInputClick() {
              this._handleInputClick();
            }
            _onTouchTargetClick() {
              this._handleInputClick(), this.disabled || this._inputElement.nativeElement.focus();
            }
            _preventBubblingFromLabel(d) {
              d.target &&
                this._labelElement.nativeElement.contains(d.target) &&
                d.stopPropagation();
            }
          }
          return (
            (m = v),
            (0, s.A)(v, '\u0275fac', function (d) {
              return new (d || m)();
            }),
            (0, s.A)(
              v,
              '\u0275cmp',
              t.VBU({
                type: m,
                selectors: [['mat-checkbox']],
                viewQuery: function (d, l) {
                  if ((1 & d && (t.GBs(E, 5), t.GBs(M, 5)), 2 & d)) {
                    let b;
                    t.mGM((b = t.lsd())) && (l._inputElement = b.first),
                      t.mGM((b = t.lsd())) && (l._labelElement = b.first);
                  }
                },
                hostAttrs: [1, 'mat-mdc-checkbox'],
                hostVars: 16,
                hostBindings: function (d, l) {
                  2 & d &&
                    (t.Mr5('id', l.id),
                    t.BMQ('tabindex', null)('aria-label', null)('aria-labelledby', null),
                    t.HbH(l.color ? 'mat-' + l.color : 'mat-accent'),
                    t.AVh('_mat-animation-noopable', 'NoopAnimations' === l._animationMode)(
                      'mdc-checkbox--disabled',
                      l.disabled,
                    )('mat-mdc-checkbox-disabled', l.disabled)(
                      'mat-mdc-checkbox-checked',
                      l.checked,
                    )('mat-mdc-checkbox-disabled-interactive', l.disabledInteractive));
                },
                inputs: {
                  ariaLabel: [0, 'aria-label', 'ariaLabel'],
                  ariaLabelledby: [0, 'aria-labelledby', 'ariaLabelledby'],
                  ariaDescribedby: [0, 'aria-describedby', 'ariaDescribedby'],
                  ariaExpanded: [2, 'aria-expanded', 'ariaExpanded', t.L39],
                  ariaControls: [0, 'aria-controls', 'ariaControls'],
                  ariaOwns: [0, 'aria-owns', 'ariaOwns'],
                  id: 'id',
                  required: [2, 'required', 'required', t.L39],
                  labelPosition: 'labelPosition',
                  name: 'name',
                  value: 'value',
                  disableRipple: [2, 'disableRipple', 'disableRipple', t.L39],
                  tabIndex: [
                    2,
                    'tabIndex',
                    'tabIndex',
                    (_) => (null == _ ? void 0 : (0, t.Udg)(_)),
                  ],
                  color: 'color',
                  disabledInteractive: [2, 'disabledInteractive', 'disabledInteractive', t.L39],
                  checked: [2, 'checked', 'checked', t.L39],
                  disabled: [2, 'disabled', 'disabled', t.L39],
                  indeterminate: [2, 'indeterminate', 'indeterminate', t.L39],
                },
                outputs: { change: 'change', indeterminateChange: 'indeterminateChange' },
                exportAs: ['matCheckbox'],
                features: [t.Jv_([Q, { provide: x.cz, useExisting: m, multi: !0 }]), t.GFd, t.OA$],
                ngContentSelectors: w,
                decls: 15,
                vars: 23,
                consts: [
                  ['checkbox', ''],
                  ['input', ''],
                  ['label', ''],
                  ['mat-internal-form-field', '', 3, 'click', 'labelPosition'],
                  [1, 'mdc-checkbox'],
                  [1, 'mat-mdc-checkbox-touch-target', 3, 'click'],
                  [
                    'type',
                    'checkbox',
                    1,
                    'mdc-checkbox__native-control',
                    3,
                    'blur',
                    'click',
                    'change',
                    'checked',
                    'indeterminate',
                    'disabled',
                    'id',
                    'required',
                    'tabIndex',
                  ],
                  [1, 'mdc-checkbox__ripple'],
                  [1, 'mdc-checkbox__background'],
                  [
                    'focusable',
                    'false',
                    'viewBox',
                    '0 0 24 24',
                    'aria-hidden',
                    'true',
                    1,
                    'mdc-checkbox__checkmark',
                  ],
                  [
                    'fill',
                    'none',
                    'd',
                    'M1.73,12.91 8.1,19.28 22.79,4.59',
                    1,
                    'mdc-checkbox__checkmark-path',
                  ],
                  [1, 'mdc-checkbox__mixedmark'],
                  [
                    'mat-ripple',
                    '',
                    1,
                    'mat-mdc-checkbox-ripple',
                    'mat-focus-indicator',
                    3,
                    'matRippleTrigger',
                    'matRippleDisabled',
                    'matRippleCentered',
                  ],
                  [1, 'mdc-label', 3, 'for'],
                ],
                template: function (d, l) {
                  if (1 & d) {
                    const b = t.RV6();
                    t.NAR(),
                      t.j41(0, 'div', 3),
                      t.bIt('click', function (V) {
                        return t.eBV(b), t.Njj(l._preventBubblingFromLabel(V));
                      }),
                      t.j41(1, 'div', 4, 0)(3, 'div', 5),
                      t.bIt('click', function () {
                        return t.eBV(b), t.Njj(l._onTouchTargetClick());
                      }),
                      t.k0s(),
                      t.j41(4, 'input', 6, 1),
                      t.bIt('blur', function () {
                        return t.eBV(b), t.Njj(l._onBlur());
                      })('click', function () {
                        return t.eBV(b), t.Njj(l._onInputClick());
                      })('change', function (V) {
                        return t.eBV(b), t.Njj(l._onInteractionEvent(V));
                      }),
                      t.k0s(),
                      t.nrm(6, 'div', 7),
                      t.j41(7, 'div', 8),
                      t.qSk(),
                      t.j41(8, 'svg', 9),
                      t.nrm(9, 'path', 10),
                      t.k0s(),
                      t.joV(),
                      t.nrm(10, 'div', 11),
                      t.k0s(),
                      t.nrm(11, 'div', 12),
                      t.k0s(),
                      t.j41(12, 'label', 13, 2),
                      t.SdG(14),
                      t.k0s()();
                  }
                  if (2 & d) {
                    const b = t.sdS(2);
                    t.Y8G('labelPosition', l.labelPosition),
                      t.R7$(4),
                      t.AVh('mdc-checkbox--selected', l.checked),
                      t.Y8G('checked', l.checked)('indeterminate', l.indeterminate)(
                        'disabled',
                        l.disabled && !l.disabledInteractive,
                      )('id', l.inputId)('required', l.required)(
                        'tabIndex',
                        l.disabled && !l.disabledInteractive ? -1 : l.tabIndex,
                      ),
                      t.BMQ('aria-label', l.ariaLabel || null)('aria-labelledby', l.ariaLabelledby)(
                        'aria-describedby',
                        l.ariaDescribedby,
                      )('aria-checked', l.indeterminate ? 'mixed' : null)(
                        'aria-controls',
                        l.ariaControls,
                      )('aria-disabled', !(!l.disabled || !l.disabledInteractive) || null)(
                        'aria-expanded',
                        l.ariaExpanded,
                      )('aria-owns', l.ariaOwns)('name', l.name)('value', l.value),
                      t.R7$(7),
                      t.Y8G('matRippleTrigger', b)(
                        'matRippleDisabled',
                        l.disableRipple || l.disabled,
                      )('matRippleCentered', !0),
                      t.R7$(),
                      t.Y8G('for', l.inputId);
                  }
                },
                dependencies: [k.r6, k.tO],
                styles: [
                  '.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover .mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover .mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mdc-checkbox__ripple{opacity:var(--mdc-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active .mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mdc-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mdc-checkbox__ripple{background-color:var(--mdc-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;width:var(--mdc-checkbox-state-layer-size, 40px);height:var(--mdc-checkbox-state-layer-size, 40px);top:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);right:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - var(--mdc-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}@media(forced-colors: active){.mdc-checkbox--disabled{opacity:.5}}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mdc-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mdc-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mdc-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mdc-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover .mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mdc-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mdc-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mdc-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mdc-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *,.mat-mdc-checkbox._mat-animation-noopable .mdc-checkbox *::before{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:48px;width:48px;transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus~.mat-focus-indicator::before{content:""}',
                ],
                encapsulation: 2,
                changeDetection: 0,
              }),
            ),
            v
          );
        })(),
        L = (() => {
          var m;
          class v {}
          return (
            (m = v),
            (0, s.A)(v, '\u0275fac', function (d) {
              return new (d || m)();
            }),
            (0, s.A)(v, '\u0275mod', t.$C({ type: m })),
            (0, s.A)(v, '\u0275inj', t.G2t({ imports: [H, k.yE, k.yE] })),
            v
          );
        })();
    },
  },
]);
