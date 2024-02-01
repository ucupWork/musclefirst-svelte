import { error } from '$helper/error';
import QRCode, { type QRCodeErrorCorrectionLevel } from 'qrcode';
import sharp from 'sharp';

import type { RequestHandler } from './__types';
