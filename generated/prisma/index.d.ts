
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model LaptopComputer
 * 
 */
export type LaptopComputer = $Result.DefaultSelection<Prisma.$LaptopComputerPayload>
/**
 * Model Headphone
 * 
 */
export type Headphone = $Result.DefaultSelection<Prisma.$HeadphonePayload>
/**
 * Model Bag
 * 
 */
export type Bag = $Result.DefaultSelection<Prisma.$BagPayload>
/**
 * Model Clothing
 * 
 */
export type Clothing = $Result.DefaultSelection<Prisma.$ClothingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KenyanCounty: {
  BARINGO: 'BARINGO',
  BOMET: 'BOMET',
  BUNGOMA: 'BUNGOMA',
  BUSIA: 'BUSIA',
  ELGEYO_MARAKWET: 'ELGEYO_MARAKWET',
  EMBU: 'EMBU',
  GARISSA: 'GARISSA',
  HOMA_BAY: 'HOMA_BAY',
  ISIOLO: 'ISIOLO',
  KAJIADO: 'KAJIADO',
  KAKAMEGA: 'KAKAMEGA',
  KERICHO: 'KERICHO',
  KIAMBU: 'KIAMBU',
  KILIFI: 'KILIFI',
  KIRINYAGA: 'KIRINYAGA',
  KISII: 'KISII',
  KISUMU: 'KISUMU',
  KITUI: 'KITUI',
  KWALE: 'KWALE',
  LAIKIPIA: 'LAIKIPIA',
  LAMU: 'LAMU',
  MACHAKOS: 'MACHAKOS',
  MAKUENI: 'MAKUENI',
  MANDERA: 'MANDERA',
  MARSABIT: 'MARSABIT',
  MERU: 'MERU',
  MIGORI: 'MIGORI',
  MOMBASA: 'MOMBASA',
  MURANG_A: 'MURANG_A',
  NAIROBI: 'NAIROBI',
  NAKURU: 'NAKURU',
  NANDI: 'NANDI',
  NAROK: 'NAROK',
  NYAMIRA: 'NYAMIRA',
  NYANDARUA: 'NYANDARUA',
  NYERI: 'NYERI',
  SAMBURU: 'SAMBURU',
  SIAYA: 'SIAYA',
  TAITA_TAVETA: 'TAITA_TAVETA',
  TANA_RIVER: 'TANA_RIVER',
  THARAKA_NITHI: 'THARAKA_NITHI',
  TRANS_NZOIA: 'TRANS_NZOIA',
  TURKANA: 'TURKANA',
  UASIN_GISHU: 'UASIN_GISHU',
  VIHIGA: 'VIHIGA',
  WAJIR: 'WAJIR',
  WEST_POKOT: 'WEST_POKOT'
};

export type KenyanCounty = (typeof KenyanCounty)[keyof typeof KenyanCounty]


export const Condition: {
  BRAND_NEW: 'BRAND_NEW',
  USED: 'USED',
  REFURBISHED: 'REFURBISHED',
  FOR_PARTS_OR_NOT_WORKING: 'FOR_PARTS_OR_NOT_WORKING'
};

export type Condition = (typeof Condition)[keyof typeof Condition]


export const ExchangePossible: {
  YES: 'YES',
  NO: 'NO'
};

export type ExchangePossible = (typeof ExchangePossible)[keyof typeof ExchangePossible]


export const OpenToNegotiation: {
  YES: 'YES',
  NO: 'NO',
  NOT_SURE: 'NOT_SURE'
};

export type OpenToNegotiation = (typeof OpenToNegotiation)[keyof typeof OpenToNegotiation]


export const ComputerType: {
  LAPTOP: 'LAPTOP',
  DESKTOP: 'DESKTOP',
  SERVER: 'SERVER'
};

export type ComputerType = (typeof ComputerType)[keyof typeof ComputerType]


export const LaptopBrand: {
  APPLE: 'APPLE',
  ASUS: 'ASUS',
  ACER: 'ACER',
  DELL: 'DELL',
  HP: 'HP',
  LENOVO: 'LENOVO',
  MSI: 'MSI',
  RAZER: 'RAZER',
  SAMSUNG: 'SAMSUNG',
  TOSHIBA: 'TOSHIBA',
  OTHER: 'OTHER'
};

export type LaptopBrand = (typeof LaptopBrand)[keyof typeof LaptopBrand]


export const LaptopSubtype: {
  GAMING_LAPTOP: 'GAMING_LAPTOP',
  CHROMEBOOK: 'CHROMEBOOK',
  TRADITIONAL_LAPTOP: 'TRADITIONAL_LAPTOP',
  CONVERTIBLE_LAPTOP: 'CONVERTIBLE_LAPTOP'
};

export type LaptopSubtype = (typeof LaptopSubtype)[keyof typeof LaptopSubtype]


export const DesktopSubtype: {
  ALL_IN_ONE: 'ALL_IN_ONE',
  MINI_COMPACT: 'MINI_COMPACT',
  THIN_CLIENT: 'THIN_CLIENT',
  WORKSTATION: 'WORKSTATION'
};

export type DesktopSubtype = (typeof DesktopSubtype)[keyof typeof DesktopSubtype]


export const ServerSubtype: {
  RACK: 'RACK',
  TOWER: 'TOWER'
};

export type ServerSubtype = (typeof ServerSubtype)[keyof typeof ServerSubtype]


export const StorageType: {
  HDD: 'HDD',
  SSD: 'SSD',
  HYBRID: 'HYBRID',
  EMMC: 'EMMC',
  NVME: 'NVME'
};

export type StorageType = (typeof StorageType)[keyof typeof StorageType]


export const OperatingSystem: {
  WINDOWS_11: 'WINDOWS_11',
  WINDOWS_10: 'WINDOWS_10',
  MACOS: 'MACOS',
  LINUX_UBUNTU: 'LINUX_UBUNTU',
  LINUX_OTHER: 'LINUX_OTHER',
  CHROME_OS: 'CHROME_OS',
  DOS: 'DOS',
  NO_OS: 'NO_OS',
  OTHER: 'OTHER'
};

export type OperatingSystem = (typeof OperatingSystem)[keyof typeof OperatingSystem]


export const HeadphoneBrand: {
  JBL: 'JBL',
  LOGITECH: 'LOGITECH',
  ORAIMO: 'ORAIMO',
  SONY: 'SONY',
  BOSE: 'BOSE',
  BEATS: 'BEATS',
  SENNHEISER: 'SENNHEISER',
  AUDIO_TECHNICA: 'AUDIO_TECHNICA',
  SKULLCANDY: 'SKULLCANDY',
  APPLE: 'APPLE',
  SAMSUNG: 'SAMSUNG',
  OTHER: 'OTHER'
};

export type HeadphoneBrand = (typeof HeadphoneBrand)[keyof typeof HeadphoneBrand]


export const HeadphoneType: {
  IN_EAR: 'IN_EAR',
  ON_EAR: 'ON_EAR',
  OVER_EAR: 'OVER_EAR'
};

export type HeadphoneType = (typeof HeadphoneType)[keyof typeof HeadphoneType]


export const HeadphoneFormFactor: {
  EAR_HOOK: 'EAR_HOOK',
  HEADBAND: 'HEADBAND',
  IN_EAR_ONLY: 'IN_EAR_ONLY',
  NECKBAND: 'NECKBAND'
};

export type HeadphoneFormFactor = (typeof HeadphoneFormFactor)[keyof typeof HeadphoneFormFactor]


export const HeadphoneConnectivity: {
  WIRED: 'WIRED',
  WIRELESS: 'WIRELESS',
  BOTH: 'BOTH'
};

export type HeadphoneConnectivity = (typeof HeadphoneConnectivity)[keyof typeof HeadphoneConnectivity]


export const HeadphoneFeature: {
  ACTIVE_NOISE_CANCELLATION: 'ACTIVE_NOISE_CANCELLATION',
  DETACHABLE_MICROPHONE: 'DETACHABLE_MICROPHONE',
  WATERPROOF: 'WATERPROOF',
  WIRELESS_CHARGING: 'WIRELESS_CHARGING',
  FAST_CHARGING: 'FAST_CHARGING',
  VOICE_ASSISTANT: 'VOICE_ASSISTANT',
  FOLDABLE: 'FOLDABLE',
  BASS_BOOST: 'BASS_BOOST'
};

export type HeadphoneFeature = (typeof HeadphoneFeature)[keyof typeof HeadphoneFeature]


export const BagBrand: {
  ALDO: 'ALDO',
  GENERIC: 'GENERIC',
  HP: 'HP',
  LOUIS_VUITTON: 'LOUIS_VUITTON',
  GUCCI: 'GUCCI',
  PRADA: 'PRADA',
  NIKE: 'NIKE',
  ADIDAS: 'ADIDAS',
  SAMSONITE: 'SAMSONITE',
  AMERICAN_TOURISTER: 'AMERICAN_TOURISTER',
  OTHER: 'OTHER'
};

export type BagBrand = (typeof BagBrand)[keyof typeof BagBrand]


export const BagGender: {
  MEN: 'MEN',
  WOMEN: 'WOMEN',
  UNISEX: 'UNISEX'
};

export type BagGender = (typeof BagGender)[keyof typeof BagGender]


export const BagType: {
  HANDBAG: 'HANDBAG',
  BACKPACK: 'BACKPACK',
  SHOULDER_BAG: 'SHOULDER_BAG',
  SUITCASE: 'SUITCASE',
  BRIEFCASE: 'BRIEFCASE',
  MESSENGER_BAG: 'MESSENGER_BAG',
  TOTE_BAG: 'TOTE_BAG',
  CLUTCH: 'CLUTCH',
  DUFFEL_BAG: 'DUFFEL_BAG',
  LAPTOP_BAG: 'LAPTOP_BAG'
};

export type BagType = (typeof BagType)[keyof typeof BagType]


export const ClothingBrand: {
  ADIDAS: 'ADIDAS',
  NIKE: 'NIKE',
  PUMA: 'PUMA',
  ZARA: 'ZARA',
  H_AND_M: 'H_AND_M',
  GUCCI: 'GUCCI',
  PRADA: 'PRADA',
  CALVIN_KLEIN: 'CALVIN_KLEIN',
  TOMMY_HILFIGER: 'TOMMY_HILFIGER',
  LEVI_S: 'LEVI_S',
  ABC: 'ABC',
  OTHER: 'OTHER'
};

export type ClothingBrand = (typeof ClothingBrand)[keyof typeof ClothingBrand]


export const ClothingType: {
  ACTIVEWEAR: 'ACTIVEWEAR',
  DRESSES: 'DRESSES',
  SHIRTS: 'SHIRTS',
  SUITS: 'SUITS',
  JEANS: 'JEANS',
  TROUSERS: 'TROUSERS',
  SHORTS: 'SHORTS',
  SKIRTS: 'SKIRTS',
  JACKETS: 'JACKETS',
  COATS: 'COATS',
  SWEATERS: 'SWEATERS',
  T_SHIRTS: 'T_SHIRTS',
  UNDERWEAR: 'UNDERWEAR',
  SLEEPWEAR: 'SLEEPWEAR'
};

export type ClothingType = (typeof ClothingType)[keyof typeof ClothingType]


export const ClothingGender: {
  MEN: 'MEN',
  WOMEN: 'WOMEN',
  UNISEX: 'UNISEX',
  BOYS: 'BOYS',
  GIRLS: 'GIRLS'
};

export type ClothingGender = (typeof ClothingGender)[keyof typeof ClothingGender]

}

export type KenyanCounty = $Enums.KenyanCounty

export const KenyanCounty: typeof $Enums.KenyanCounty

export type Condition = $Enums.Condition

export const Condition: typeof $Enums.Condition

export type ExchangePossible = $Enums.ExchangePossible

export const ExchangePossible: typeof $Enums.ExchangePossible

export type OpenToNegotiation = $Enums.OpenToNegotiation

export const OpenToNegotiation: typeof $Enums.OpenToNegotiation

export type ComputerType = $Enums.ComputerType

export const ComputerType: typeof $Enums.ComputerType

export type LaptopBrand = $Enums.LaptopBrand

export const LaptopBrand: typeof $Enums.LaptopBrand

export type LaptopSubtype = $Enums.LaptopSubtype

export const LaptopSubtype: typeof $Enums.LaptopSubtype

export type DesktopSubtype = $Enums.DesktopSubtype

export const DesktopSubtype: typeof $Enums.DesktopSubtype

export type ServerSubtype = $Enums.ServerSubtype

export const ServerSubtype: typeof $Enums.ServerSubtype

export type StorageType = $Enums.StorageType

export const StorageType: typeof $Enums.StorageType

export type OperatingSystem = $Enums.OperatingSystem

export const OperatingSystem: typeof $Enums.OperatingSystem

export type HeadphoneBrand = $Enums.HeadphoneBrand

export const HeadphoneBrand: typeof $Enums.HeadphoneBrand

export type HeadphoneType = $Enums.HeadphoneType

export const HeadphoneType: typeof $Enums.HeadphoneType

export type HeadphoneFormFactor = $Enums.HeadphoneFormFactor

export const HeadphoneFormFactor: typeof $Enums.HeadphoneFormFactor

export type HeadphoneConnectivity = $Enums.HeadphoneConnectivity

export const HeadphoneConnectivity: typeof $Enums.HeadphoneConnectivity

export type HeadphoneFeature = $Enums.HeadphoneFeature

export const HeadphoneFeature: typeof $Enums.HeadphoneFeature

export type BagBrand = $Enums.BagBrand

export const BagBrand: typeof $Enums.BagBrand

export type BagGender = $Enums.BagGender

export const BagGender: typeof $Enums.BagGender

export type BagType = $Enums.BagType

export const BagType: typeof $Enums.BagType

export type ClothingBrand = $Enums.ClothingBrand

export const ClothingBrand: typeof $Enums.ClothingBrand

export type ClothingType = $Enums.ClothingType

export const ClothingType: typeof $Enums.ClothingType

export type ClothingGender = $Enums.ClothingGender

export const ClothingGender: typeof $Enums.ClothingGender

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.laptopComputer`: Exposes CRUD operations for the **LaptopComputer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LaptopComputers
    * const laptopComputers = await prisma.laptopComputer.findMany()
    * ```
    */
  get laptopComputer(): Prisma.LaptopComputerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.headphone`: Exposes CRUD operations for the **Headphone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Headphones
    * const headphones = await prisma.headphone.findMany()
    * ```
    */
  get headphone(): Prisma.HeadphoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bag`: Exposes CRUD operations for the **Bag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bags
    * const bags = await prisma.bag.findMany()
    * ```
    */
  get bag(): Prisma.BagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clothing`: Exposes CRUD operations for the **Clothing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clothing
    * const clothing = await prisma.clothing.findMany()
    * ```
    */
  get clothing(): Prisma.ClothingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Post: 'Post',
    User: 'User',
    Session: 'Session',
    Account: 'Account',
    Verification: 'Verification',
    LaptopComputer: 'LaptopComputer',
    Headphone: 'Headphone',
    Bag: 'Bag',
    Clothing: 'Clothing'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post" | "user" | "session" | "account" | "verification" | "laptopComputer" | "headphone" | "bag" | "clothing"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      LaptopComputer: {
        payload: Prisma.$LaptopComputerPayload<ExtArgs>
        fields: Prisma.LaptopComputerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaptopComputerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaptopComputerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload>
          }
          findFirst: {
            args: Prisma.LaptopComputerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaptopComputerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload>
          }
          findMany: {
            args: Prisma.LaptopComputerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload>[]
          }
          create: {
            args: Prisma.LaptopComputerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload>
          }
          createMany: {
            args: Prisma.LaptopComputerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaptopComputerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload>[]
          }
          delete: {
            args: Prisma.LaptopComputerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload>
          }
          update: {
            args: Prisma.LaptopComputerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload>
          }
          deleteMany: {
            args: Prisma.LaptopComputerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaptopComputerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LaptopComputerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload>[]
          }
          upsert: {
            args: Prisma.LaptopComputerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaptopComputerPayload>
          }
          aggregate: {
            args: Prisma.LaptopComputerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaptopComputer>
          }
          groupBy: {
            args: Prisma.LaptopComputerGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaptopComputerGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaptopComputerCountArgs<ExtArgs>
            result: $Utils.Optional<LaptopComputerCountAggregateOutputType> | number
          }
        }
      }
      Headphone: {
        payload: Prisma.$HeadphonePayload<ExtArgs>
        fields: Prisma.HeadphoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeadphoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeadphoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload>
          }
          findFirst: {
            args: Prisma.HeadphoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeadphoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload>
          }
          findMany: {
            args: Prisma.HeadphoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload>[]
          }
          create: {
            args: Prisma.HeadphoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload>
          }
          createMany: {
            args: Prisma.HeadphoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeadphoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload>[]
          }
          delete: {
            args: Prisma.HeadphoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload>
          }
          update: {
            args: Prisma.HeadphoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload>
          }
          deleteMany: {
            args: Prisma.HeadphoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeadphoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeadphoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload>[]
          }
          upsert: {
            args: Prisma.HeadphoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadphonePayload>
          }
          aggregate: {
            args: Prisma.HeadphoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeadphone>
          }
          groupBy: {
            args: Prisma.HeadphoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeadphoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeadphoneCountArgs<ExtArgs>
            result: $Utils.Optional<HeadphoneCountAggregateOutputType> | number
          }
        }
      }
      Bag: {
        payload: Prisma.$BagPayload<ExtArgs>
        fields: Prisma.BagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          findFirst: {
            args: Prisma.BagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          findMany: {
            args: Prisma.BagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>[]
          }
          create: {
            args: Prisma.BagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          createMany: {
            args: Prisma.BagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>[]
          }
          delete: {
            args: Prisma.BagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          update: {
            args: Prisma.BagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          deleteMany: {
            args: Prisma.BagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>[]
          }
          upsert: {
            args: Prisma.BagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BagPayload>
          }
          aggregate: {
            args: Prisma.BagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBag>
          }
          groupBy: {
            args: Prisma.BagGroupByArgs<ExtArgs>
            result: $Utils.Optional<BagGroupByOutputType>[]
          }
          count: {
            args: Prisma.BagCountArgs<ExtArgs>
            result: $Utils.Optional<BagCountAggregateOutputType> | number
          }
        }
      }
      Clothing: {
        payload: Prisma.$ClothingPayload<ExtArgs>
        fields: Prisma.ClothingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClothingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClothingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          findFirst: {
            args: Prisma.ClothingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClothingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          findMany: {
            args: Prisma.ClothingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>[]
          }
          create: {
            args: Prisma.ClothingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          createMany: {
            args: Prisma.ClothingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClothingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>[]
          }
          delete: {
            args: Prisma.ClothingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          update: {
            args: Prisma.ClothingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          deleteMany: {
            args: Prisma.ClothingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClothingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClothingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>[]
          }
          upsert: {
            args: Prisma.ClothingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClothingPayload>
          }
          aggregate: {
            args: Prisma.ClothingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClothing>
          }
          groupBy: {
            args: Prisma.ClothingGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClothingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClothingCountArgs<ExtArgs>
            result: $Utils.Optional<ClothingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post?: PostOmit
    user?: UserOmit
    session?: SessionOmit
    account?: AccountOmit
    verification?: VerificationOmit
    laptopComputer?: LaptopComputerOmit
    headphone?: HeadphoneOmit
    bag?: BagOmit
    clothing?: ClothingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    posts: number
    laptopComputers: number
    headphones: number
    bags: number
    clothing: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    laptopComputers?: boolean | UserCountOutputTypeCountLaptopComputersArgs
    headphones?: boolean | UserCountOutputTypeCountHeadphonesArgs
    bags?: boolean | UserCountOutputTypeCountBagsArgs
    clothing?: boolean | UserCountOutputTypeCountClothingArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLaptopComputersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaptopComputerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHeadphonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadphoneWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClothingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClothingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly name: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly createdById: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    laptopComputers?: boolean | User$laptopComputersArgs<ExtArgs>
    headphones?: boolean | User$headphonesArgs<ExtArgs>
    bags?: boolean | User$bagsArgs<ExtArgs>
    clothing?: boolean | User$clothingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    laptopComputers?: boolean | User$laptopComputersArgs<ExtArgs>
    headphones?: boolean | User$headphonesArgs<ExtArgs>
    bags?: boolean | User$bagsArgs<ExtArgs>
    clothing?: boolean | User$clothingArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      laptopComputers: Prisma.$LaptopComputerPayload<ExtArgs>[]
      headphones: Prisma.$HeadphonePayload<ExtArgs>[]
      bags: Prisma.$BagPayload<ExtArgs>[]
      clothing: Prisma.$ClothingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      emailVerified: boolean
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    laptopComputers<T extends User$laptopComputersArgs<ExtArgs> = {}>(args?: Subset<T, User$laptopComputersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    headphones<T extends User$headphonesArgs<ExtArgs> = {}>(args?: Subset<T, User$headphonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bags<T extends User$bagsArgs<ExtArgs> = {}>(args?: Subset<T, User$bagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clothing<T extends User$clothingArgs<ExtArgs> = {}>(args?: Subset<T, User$clothingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.laptopComputers
   */
  export type User$laptopComputersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    where?: LaptopComputerWhereInput
    orderBy?: LaptopComputerOrderByWithRelationInput | LaptopComputerOrderByWithRelationInput[]
    cursor?: LaptopComputerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaptopComputerScalarFieldEnum | LaptopComputerScalarFieldEnum[]
  }

  /**
   * User.headphones
   */
  export type User$headphonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    where?: HeadphoneWhereInput
    orderBy?: HeadphoneOrderByWithRelationInput | HeadphoneOrderByWithRelationInput[]
    cursor?: HeadphoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeadphoneScalarFieldEnum | HeadphoneScalarFieldEnum[]
  }

  /**
   * User.bags
   */
  export type User$bagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    where?: BagWhereInput
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    cursor?: BagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * User.clothing
   */
  export type User$clothingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    where?: ClothingWhereInput
    orderBy?: ClothingOrderByWithRelationInput | ClothingOrderByWithRelationInput[]
    cursor?: ClothingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClothingScalarFieldEnum | ClothingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    expiresAt: Date | null
    token: string | null
    createdAt: Date | null
    updatedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    expiresAt: number
    token: number
    createdAt: number
    updatedAt: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    expiresAt?: true
    token?: true
    createdAt?: true
    updatedAt?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    expiresAt?: boolean
    token?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "expiresAt" | "token" | "createdAt" | "updatedAt" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      expiresAt: Date
      token: string
      createdAt: Date
      updatedAt: Date
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    accountId: string | null
    providerId: string | null
    userId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    accountId: number
    providerId: number
    userId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    accountId?: true
    providerId?: true
    userId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    accountId?: boolean
    providerId?: boolean
    userId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "accountId" | "providerId" | "userId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      accountId: string
      providerId: string
      userId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    identifier: number
    value: number
    expiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    identifier?: true
    value?: true
    expiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    identifier: string
    value: string
    expiresAt: Date
    createdAt: Date
    updatedAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "identifier" | "value" | "expiresAt" | "createdAt" | "updatedAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      identifier: string
      value: string
      expiresAt: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model LaptopComputer
   */

  export type AggregateLaptopComputer = {
    _count: LaptopComputerCountAggregateOutputType | null
    _avg: LaptopComputerAvgAggregateOutputType | null
    _sum: LaptopComputerSumAggregateOutputType | null
    _min: LaptopComputerMinAggregateOutputType | null
    _max: LaptopComputerMaxAggregateOutputType | null
  }

  export type LaptopComputerAvgAggregateOutputType = {
    numberOfCores: number | null
  }

  export type LaptopComputerSumAggregateOutputType = {
    numberOfCores: number | null
  }

  export type LaptopComputerMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    location: $Enums.KenyanCounty | null
    type: $Enums.ComputerType | null
    brand: $Enums.LaptopBrand | null
    laptopSubtype: $Enums.LaptopSubtype | null
    desktopSubtype: $Enums.DesktopSubtype | null
    serverSubtype: $Enums.ServerSubtype | null
    model: string | null
    condition: $Enums.Condition | null
    processorType: string | null
    numberOfCores: number | null
    ram: string | null
    storageCapacity: string | null
    storageType: $Enums.StorageType | null
    displaySize: string | null
    graphicsCard: string | null
    graphicsCardMemory: string | null
    operatingSystem: $Enums.OperatingSystem | null
    color: string | null
    exchangePossible: $Enums.ExchangePossible | null
    openToNegotiation: $Enums.OpenToNegotiation | null
    description: string | null
    price: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type LaptopComputerMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    location: $Enums.KenyanCounty | null
    type: $Enums.ComputerType | null
    brand: $Enums.LaptopBrand | null
    laptopSubtype: $Enums.LaptopSubtype | null
    desktopSubtype: $Enums.DesktopSubtype | null
    serverSubtype: $Enums.ServerSubtype | null
    model: string | null
    condition: $Enums.Condition | null
    processorType: string | null
    numberOfCores: number | null
    ram: string | null
    storageCapacity: string | null
    storageType: $Enums.StorageType | null
    displaySize: string | null
    graphicsCard: string | null
    graphicsCardMemory: string | null
    operatingSystem: $Enums.OperatingSystem | null
    color: string | null
    exchangePossible: $Enums.ExchangePossible | null
    openToNegotiation: $Enums.OpenToNegotiation | null
    description: string | null
    price: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type LaptopComputerCountAggregateOutputType = {
    id: number
    title: number
    category: number
    subcategory: number
    location: number
    type: number
    brand: number
    laptopSubtype: number
    desktopSubtype: number
    serverSubtype: number
    model: number
    condition: number
    processorType: number
    numberOfCores: number
    ram: number
    storageCapacity: number
    storageType: number
    displaySize: number
    graphicsCard: number
    graphicsCardMemory: number
    operatingSystem: number
    color: number
    exchangePossible: number
    openToNegotiation: number
    description: number
    price: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type LaptopComputerAvgAggregateInputType = {
    numberOfCores?: true
  }

  export type LaptopComputerSumAggregateInputType = {
    numberOfCores?: true
  }

  export type LaptopComputerMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    type?: true
    brand?: true
    laptopSubtype?: true
    desktopSubtype?: true
    serverSubtype?: true
    model?: true
    condition?: true
    processorType?: true
    numberOfCores?: true
    ram?: true
    storageCapacity?: true
    storageType?: true
    displaySize?: true
    graphicsCard?: true
    graphicsCardMemory?: true
    operatingSystem?: true
    color?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type LaptopComputerMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    type?: true
    brand?: true
    laptopSubtype?: true
    desktopSubtype?: true
    serverSubtype?: true
    model?: true
    condition?: true
    processorType?: true
    numberOfCores?: true
    ram?: true
    storageCapacity?: true
    storageType?: true
    displaySize?: true
    graphicsCard?: true
    graphicsCardMemory?: true
    operatingSystem?: true
    color?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type LaptopComputerCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    type?: true
    brand?: true
    laptopSubtype?: true
    desktopSubtype?: true
    serverSubtype?: true
    model?: true
    condition?: true
    processorType?: true
    numberOfCores?: true
    ram?: true
    storageCapacity?: true
    storageType?: true
    displaySize?: true
    graphicsCard?: true
    graphicsCardMemory?: true
    operatingSystem?: true
    color?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type LaptopComputerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaptopComputer to aggregate.
     */
    where?: LaptopComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaptopComputers to fetch.
     */
    orderBy?: LaptopComputerOrderByWithRelationInput | LaptopComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaptopComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaptopComputers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaptopComputers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LaptopComputers
    **/
    _count?: true | LaptopComputerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaptopComputerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaptopComputerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaptopComputerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaptopComputerMaxAggregateInputType
  }

  export type GetLaptopComputerAggregateType<T extends LaptopComputerAggregateArgs> = {
        [P in keyof T & keyof AggregateLaptopComputer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaptopComputer[P]>
      : GetScalarType<T[P], AggregateLaptopComputer[P]>
  }




  export type LaptopComputerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaptopComputerWhereInput
    orderBy?: LaptopComputerOrderByWithAggregationInput | LaptopComputerOrderByWithAggregationInput[]
    by: LaptopComputerScalarFieldEnum[] | LaptopComputerScalarFieldEnum
    having?: LaptopComputerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaptopComputerCountAggregateInputType | true
    _avg?: LaptopComputerAvgAggregateInputType
    _sum?: LaptopComputerSumAggregateInputType
    _min?: LaptopComputerMinAggregateInputType
    _max?: LaptopComputerMaxAggregateInputType
  }

  export type LaptopComputerGroupByOutputType = {
    id: string
    title: string
    category: string
    subcategory: string
    location: $Enums.KenyanCounty
    type: $Enums.ComputerType
    brand: $Enums.LaptopBrand
    laptopSubtype: $Enums.LaptopSubtype | null
    desktopSubtype: $Enums.DesktopSubtype | null
    serverSubtype: $Enums.ServerSubtype | null
    model: string | null
    condition: $Enums.Condition
    processorType: string
    numberOfCores: number
    ram: string
    storageCapacity: string
    storageType: $Enums.StorageType
    displaySize: string | null
    graphicsCard: string | null
    graphicsCardMemory: string | null
    operatingSystem: $Enums.OperatingSystem
    color: string
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: LaptopComputerCountAggregateOutputType | null
    _avg: LaptopComputerAvgAggregateOutputType | null
    _sum: LaptopComputerSumAggregateOutputType | null
    _min: LaptopComputerMinAggregateOutputType | null
    _max: LaptopComputerMaxAggregateOutputType | null
  }

  type GetLaptopComputerGroupByPayload<T extends LaptopComputerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaptopComputerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaptopComputerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaptopComputerGroupByOutputType[P]>
            : GetScalarType<T[P], LaptopComputerGroupByOutputType[P]>
        }
      >
    >


  export type LaptopComputerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    type?: boolean
    brand?: boolean
    laptopSubtype?: boolean
    desktopSubtype?: boolean
    serverSubtype?: boolean
    model?: boolean
    condition?: boolean
    processorType?: boolean
    numberOfCores?: boolean
    ram?: boolean
    storageCapacity?: boolean
    storageType?: boolean
    displaySize?: boolean
    graphicsCard?: boolean
    graphicsCardMemory?: boolean
    operatingSystem?: boolean
    color?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laptopComputer"]>

  export type LaptopComputerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    type?: boolean
    brand?: boolean
    laptopSubtype?: boolean
    desktopSubtype?: boolean
    serverSubtype?: boolean
    model?: boolean
    condition?: boolean
    processorType?: boolean
    numberOfCores?: boolean
    ram?: boolean
    storageCapacity?: boolean
    storageType?: boolean
    displaySize?: boolean
    graphicsCard?: boolean
    graphicsCardMemory?: boolean
    operatingSystem?: boolean
    color?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laptopComputer"]>

  export type LaptopComputerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    type?: boolean
    brand?: boolean
    laptopSubtype?: boolean
    desktopSubtype?: boolean
    serverSubtype?: boolean
    model?: boolean
    condition?: boolean
    processorType?: boolean
    numberOfCores?: boolean
    ram?: boolean
    storageCapacity?: boolean
    storageType?: boolean
    displaySize?: boolean
    graphicsCard?: boolean
    graphicsCardMemory?: boolean
    operatingSystem?: boolean
    color?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laptopComputer"]>

  export type LaptopComputerSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    type?: boolean
    brand?: boolean
    laptopSubtype?: boolean
    desktopSubtype?: boolean
    serverSubtype?: boolean
    model?: boolean
    condition?: boolean
    processorType?: boolean
    numberOfCores?: boolean
    ram?: boolean
    storageCapacity?: boolean
    storageType?: boolean
    displaySize?: boolean
    graphicsCard?: boolean
    graphicsCardMemory?: boolean
    operatingSystem?: boolean
    color?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type LaptopComputerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "subcategory" | "location" | "type" | "brand" | "laptopSubtype" | "desktopSubtype" | "serverSubtype" | "model" | "condition" | "processorType" | "numberOfCores" | "ram" | "storageCapacity" | "storageType" | "displaySize" | "graphicsCard" | "graphicsCardMemory" | "operatingSystem" | "color" | "exchangePossible" | "openToNegotiation" | "description" | "price" | "phoneNumber" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["laptopComputer"]>
  export type LaptopComputerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LaptopComputerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LaptopComputerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LaptopComputerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LaptopComputer"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      subcategory: string
      location: $Enums.KenyanCounty
      type: $Enums.ComputerType
      brand: $Enums.LaptopBrand
      laptopSubtype: $Enums.LaptopSubtype | null
      desktopSubtype: $Enums.DesktopSubtype | null
      serverSubtype: $Enums.ServerSubtype | null
      model: string | null
      condition: $Enums.Condition
      processorType: string
      numberOfCores: number
      ram: string
      storageCapacity: string
      storageType: $Enums.StorageType
      displaySize: string | null
      graphicsCard: string | null
      graphicsCardMemory: string | null
      operatingSystem: $Enums.OperatingSystem
      color: string
      exchangePossible: $Enums.ExchangePossible
      openToNegotiation: $Enums.OpenToNegotiation
      description: string
      price: string
      phoneNumber: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["laptopComputer"]>
    composites: {}
  }

  type LaptopComputerGetPayload<S extends boolean | null | undefined | LaptopComputerDefaultArgs> = $Result.GetResult<Prisma.$LaptopComputerPayload, S>

  type LaptopComputerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LaptopComputerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LaptopComputerCountAggregateInputType | true
    }

  export interface LaptopComputerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LaptopComputer'], meta: { name: 'LaptopComputer' } }
    /**
     * Find zero or one LaptopComputer that matches the filter.
     * @param {LaptopComputerFindUniqueArgs} args - Arguments to find a LaptopComputer
     * @example
     * // Get one LaptopComputer
     * const laptopComputer = await prisma.laptopComputer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaptopComputerFindUniqueArgs>(args: SelectSubset<T, LaptopComputerFindUniqueArgs<ExtArgs>>): Prisma__LaptopComputerClient<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LaptopComputer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LaptopComputerFindUniqueOrThrowArgs} args - Arguments to find a LaptopComputer
     * @example
     * // Get one LaptopComputer
     * const laptopComputer = await prisma.laptopComputer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaptopComputerFindUniqueOrThrowArgs>(args: SelectSubset<T, LaptopComputerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaptopComputerClient<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaptopComputer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopComputerFindFirstArgs} args - Arguments to find a LaptopComputer
     * @example
     * // Get one LaptopComputer
     * const laptopComputer = await prisma.laptopComputer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaptopComputerFindFirstArgs>(args?: SelectSubset<T, LaptopComputerFindFirstArgs<ExtArgs>>): Prisma__LaptopComputerClient<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LaptopComputer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopComputerFindFirstOrThrowArgs} args - Arguments to find a LaptopComputer
     * @example
     * // Get one LaptopComputer
     * const laptopComputer = await prisma.laptopComputer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaptopComputerFindFirstOrThrowArgs>(args?: SelectSubset<T, LaptopComputerFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaptopComputerClient<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LaptopComputers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopComputerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaptopComputers
     * const laptopComputers = await prisma.laptopComputer.findMany()
     * 
     * // Get first 10 LaptopComputers
     * const laptopComputers = await prisma.laptopComputer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laptopComputerWithIdOnly = await prisma.laptopComputer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaptopComputerFindManyArgs>(args?: SelectSubset<T, LaptopComputerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LaptopComputer.
     * @param {LaptopComputerCreateArgs} args - Arguments to create a LaptopComputer.
     * @example
     * // Create one LaptopComputer
     * const LaptopComputer = await prisma.laptopComputer.create({
     *   data: {
     *     // ... data to create a LaptopComputer
     *   }
     * })
     * 
     */
    create<T extends LaptopComputerCreateArgs>(args: SelectSubset<T, LaptopComputerCreateArgs<ExtArgs>>): Prisma__LaptopComputerClient<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LaptopComputers.
     * @param {LaptopComputerCreateManyArgs} args - Arguments to create many LaptopComputers.
     * @example
     * // Create many LaptopComputers
     * const laptopComputer = await prisma.laptopComputer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaptopComputerCreateManyArgs>(args?: SelectSubset<T, LaptopComputerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LaptopComputers and returns the data saved in the database.
     * @param {LaptopComputerCreateManyAndReturnArgs} args - Arguments to create many LaptopComputers.
     * @example
     * // Create many LaptopComputers
     * const laptopComputer = await prisma.laptopComputer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LaptopComputers and only return the `id`
     * const laptopComputerWithIdOnly = await prisma.laptopComputer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaptopComputerCreateManyAndReturnArgs>(args?: SelectSubset<T, LaptopComputerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LaptopComputer.
     * @param {LaptopComputerDeleteArgs} args - Arguments to delete one LaptopComputer.
     * @example
     * // Delete one LaptopComputer
     * const LaptopComputer = await prisma.laptopComputer.delete({
     *   where: {
     *     // ... filter to delete one LaptopComputer
     *   }
     * })
     * 
     */
    delete<T extends LaptopComputerDeleteArgs>(args: SelectSubset<T, LaptopComputerDeleteArgs<ExtArgs>>): Prisma__LaptopComputerClient<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LaptopComputer.
     * @param {LaptopComputerUpdateArgs} args - Arguments to update one LaptopComputer.
     * @example
     * // Update one LaptopComputer
     * const laptopComputer = await prisma.laptopComputer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaptopComputerUpdateArgs>(args: SelectSubset<T, LaptopComputerUpdateArgs<ExtArgs>>): Prisma__LaptopComputerClient<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LaptopComputers.
     * @param {LaptopComputerDeleteManyArgs} args - Arguments to filter LaptopComputers to delete.
     * @example
     * // Delete a few LaptopComputers
     * const { count } = await prisma.laptopComputer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaptopComputerDeleteManyArgs>(args?: SelectSubset<T, LaptopComputerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaptopComputers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopComputerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaptopComputers
     * const laptopComputer = await prisma.laptopComputer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaptopComputerUpdateManyArgs>(args: SelectSubset<T, LaptopComputerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaptopComputers and returns the data updated in the database.
     * @param {LaptopComputerUpdateManyAndReturnArgs} args - Arguments to update many LaptopComputers.
     * @example
     * // Update many LaptopComputers
     * const laptopComputer = await prisma.laptopComputer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LaptopComputers and only return the `id`
     * const laptopComputerWithIdOnly = await prisma.laptopComputer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LaptopComputerUpdateManyAndReturnArgs>(args: SelectSubset<T, LaptopComputerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LaptopComputer.
     * @param {LaptopComputerUpsertArgs} args - Arguments to update or create a LaptopComputer.
     * @example
     * // Update or create a LaptopComputer
     * const laptopComputer = await prisma.laptopComputer.upsert({
     *   create: {
     *     // ... data to create a LaptopComputer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaptopComputer we want to update
     *   }
     * })
     */
    upsert<T extends LaptopComputerUpsertArgs>(args: SelectSubset<T, LaptopComputerUpsertArgs<ExtArgs>>): Prisma__LaptopComputerClient<$Result.GetResult<Prisma.$LaptopComputerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LaptopComputers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopComputerCountArgs} args - Arguments to filter LaptopComputers to count.
     * @example
     * // Count the number of LaptopComputers
     * const count = await prisma.laptopComputer.count({
     *   where: {
     *     // ... the filter for the LaptopComputers we want to count
     *   }
     * })
    **/
    count<T extends LaptopComputerCountArgs>(
      args?: Subset<T, LaptopComputerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaptopComputerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LaptopComputer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopComputerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaptopComputerAggregateArgs>(args: Subset<T, LaptopComputerAggregateArgs>): Prisma.PrismaPromise<GetLaptopComputerAggregateType<T>>

    /**
     * Group by LaptopComputer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaptopComputerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaptopComputerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaptopComputerGroupByArgs['orderBy'] }
        : { orderBy?: LaptopComputerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaptopComputerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaptopComputerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LaptopComputer model
   */
  readonly fields: LaptopComputerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LaptopComputer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaptopComputerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LaptopComputer model
   */
  interface LaptopComputerFieldRefs {
    readonly id: FieldRef<"LaptopComputer", 'String'>
    readonly title: FieldRef<"LaptopComputer", 'String'>
    readonly category: FieldRef<"LaptopComputer", 'String'>
    readonly subcategory: FieldRef<"LaptopComputer", 'String'>
    readonly location: FieldRef<"LaptopComputer", 'KenyanCounty'>
    readonly type: FieldRef<"LaptopComputer", 'ComputerType'>
    readonly brand: FieldRef<"LaptopComputer", 'LaptopBrand'>
    readonly laptopSubtype: FieldRef<"LaptopComputer", 'LaptopSubtype'>
    readonly desktopSubtype: FieldRef<"LaptopComputer", 'DesktopSubtype'>
    readonly serverSubtype: FieldRef<"LaptopComputer", 'ServerSubtype'>
    readonly model: FieldRef<"LaptopComputer", 'String'>
    readonly condition: FieldRef<"LaptopComputer", 'Condition'>
    readonly processorType: FieldRef<"LaptopComputer", 'String'>
    readonly numberOfCores: FieldRef<"LaptopComputer", 'Int'>
    readonly ram: FieldRef<"LaptopComputer", 'String'>
    readonly storageCapacity: FieldRef<"LaptopComputer", 'String'>
    readonly storageType: FieldRef<"LaptopComputer", 'StorageType'>
    readonly displaySize: FieldRef<"LaptopComputer", 'String'>
    readonly graphicsCard: FieldRef<"LaptopComputer", 'String'>
    readonly graphicsCardMemory: FieldRef<"LaptopComputer", 'String'>
    readonly operatingSystem: FieldRef<"LaptopComputer", 'OperatingSystem'>
    readonly color: FieldRef<"LaptopComputer", 'String'>
    readonly exchangePossible: FieldRef<"LaptopComputer", 'ExchangePossible'>
    readonly openToNegotiation: FieldRef<"LaptopComputer", 'OpenToNegotiation'>
    readonly description: FieldRef<"LaptopComputer", 'String'>
    readonly price: FieldRef<"LaptopComputer", 'String'>
    readonly phoneNumber: FieldRef<"LaptopComputer", 'String'>
    readonly createdAt: FieldRef<"LaptopComputer", 'DateTime'>
    readonly updatedAt: FieldRef<"LaptopComputer", 'DateTime'>
    readonly createdById: FieldRef<"LaptopComputer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LaptopComputer findUnique
   */
  export type LaptopComputerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    /**
     * Filter, which LaptopComputer to fetch.
     */
    where: LaptopComputerWhereUniqueInput
  }

  /**
   * LaptopComputer findUniqueOrThrow
   */
  export type LaptopComputerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    /**
     * Filter, which LaptopComputer to fetch.
     */
    where: LaptopComputerWhereUniqueInput
  }

  /**
   * LaptopComputer findFirst
   */
  export type LaptopComputerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    /**
     * Filter, which LaptopComputer to fetch.
     */
    where?: LaptopComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaptopComputers to fetch.
     */
    orderBy?: LaptopComputerOrderByWithRelationInput | LaptopComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaptopComputers.
     */
    cursor?: LaptopComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaptopComputers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaptopComputers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaptopComputers.
     */
    distinct?: LaptopComputerScalarFieldEnum | LaptopComputerScalarFieldEnum[]
  }

  /**
   * LaptopComputer findFirstOrThrow
   */
  export type LaptopComputerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    /**
     * Filter, which LaptopComputer to fetch.
     */
    where?: LaptopComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaptopComputers to fetch.
     */
    orderBy?: LaptopComputerOrderByWithRelationInput | LaptopComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaptopComputers.
     */
    cursor?: LaptopComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaptopComputers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaptopComputers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaptopComputers.
     */
    distinct?: LaptopComputerScalarFieldEnum | LaptopComputerScalarFieldEnum[]
  }

  /**
   * LaptopComputer findMany
   */
  export type LaptopComputerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    /**
     * Filter, which LaptopComputers to fetch.
     */
    where?: LaptopComputerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaptopComputers to fetch.
     */
    orderBy?: LaptopComputerOrderByWithRelationInput | LaptopComputerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LaptopComputers.
     */
    cursor?: LaptopComputerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaptopComputers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaptopComputers.
     */
    skip?: number
    distinct?: LaptopComputerScalarFieldEnum | LaptopComputerScalarFieldEnum[]
  }

  /**
   * LaptopComputer create
   */
  export type LaptopComputerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    /**
     * The data needed to create a LaptopComputer.
     */
    data: XOR<LaptopComputerCreateInput, LaptopComputerUncheckedCreateInput>
  }

  /**
   * LaptopComputer createMany
   */
  export type LaptopComputerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaptopComputers.
     */
    data: LaptopComputerCreateManyInput | LaptopComputerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaptopComputer createManyAndReturn
   */
  export type LaptopComputerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * The data used to create many LaptopComputers.
     */
    data: LaptopComputerCreateManyInput | LaptopComputerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaptopComputer update
   */
  export type LaptopComputerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    /**
     * The data needed to update a LaptopComputer.
     */
    data: XOR<LaptopComputerUpdateInput, LaptopComputerUncheckedUpdateInput>
    /**
     * Choose, which LaptopComputer to update.
     */
    where: LaptopComputerWhereUniqueInput
  }

  /**
   * LaptopComputer updateMany
   */
  export type LaptopComputerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LaptopComputers.
     */
    data: XOR<LaptopComputerUpdateManyMutationInput, LaptopComputerUncheckedUpdateManyInput>
    /**
     * Filter which LaptopComputers to update
     */
    where?: LaptopComputerWhereInput
    /**
     * Limit how many LaptopComputers to update.
     */
    limit?: number
  }

  /**
   * LaptopComputer updateManyAndReturn
   */
  export type LaptopComputerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * The data used to update LaptopComputers.
     */
    data: XOR<LaptopComputerUpdateManyMutationInput, LaptopComputerUncheckedUpdateManyInput>
    /**
     * Filter which LaptopComputers to update
     */
    where?: LaptopComputerWhereInput
    /**
     * Limit how many LaptopComputers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaptopComputer upsert
   */
  export type LaptopComputerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    /**
     * The filter to search for the LaptopComputer to update in case it exists.
     */
    where: LaptopComputerWhereUniqueInput
    /**
     * In case the LaptopComputer found by the `where` argument doesn't exist, create a new LaptopComputer with this data.
     */
    create: XOR<LaptopComputerCreateInput, LaptopComputerUncheckedCreateInput>
    /**
     * In case the LaptopComputer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaptopComputerUpdateInput, LaptopComputerUncheckedUpdateInput>
  }

  /**
   * LaptopComputer delete
   */
  export type LaptopComputerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
    /**
     * Filter which LaptopComputer to delete.
     */
    where: LaptopComputerWhereUniqueInput
  }

  /**
   * LaptopComputer deleteMany
   */
  export type LaptopComputerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaptopComputers to delete
     */
    where?: LaptopComputerWhereInput
    /**
     * Limit how many LaptopComputers to delete.
     */
    limit?: number
  }

  /**
   * LaptopComputer without action
   */
  export type LaptopComputerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaptopComputer
     */
    select?: LaptopComputerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LaptopComputer
     */
    omit?: LaptopComputerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaptopComputerInclude<ExtArgs> | null
  }


  /**
   * Model Headphone
   */

  export type AggregateHeadphone = {
    _count: HeadphoneCountAggregateOutputType | null
    _min: HeadphoneMinAggregateOutputType | null
    _max: HeadphoneMaxAggregateOutputType | null
  }

  export type HeadphoneMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    location: $Enums.KenyanCounty | null
    brand: $Enums.HeadphoneBrand | null
    type: $Enums.HeadphoneType | null
    formFactor: $Enums.HeadphoneFormFactor | null
    connectivity: $Enums.HeadphoneConnectivity | null
    resistance: string | null
    color: string | null
    condition: $Enums.Condition | null
    exchangePossible: $Enums.ExchangePossible | null
    openToNegotiation: $Enums.OpenToNegotiation | null
    description: string | null
    price: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type HeadphoneMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    location: $Enums.KenyanCounty | null
    brand: $Enums.HeadphoneBrand | null
    type: $Enums.HeadphoneType | null
    formFactor: $Enums.HeadphoneFormFactor | null
    connectivity: $Enums.HeadphoneConnectivity | null
    resistance: string | null
    color: string | null
    condition: $Enums.Condition | null
    exchangePossible: $Enums.ExchangePossible | null
    openToNegotiation: $Enums.OpenToNegotiation | null
    description: string | null
    price: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type HeadphoneCountAggregateOutputType = {
    id: number
    title: number
    category: number
    subcategory: number
    location: number
    brand: number
    type: number
    formFactor: number
    connectivity: number
    resistance: number
    color: number
    condition: number
    features: number
    exchangePossible: number
    openToNegotiation: number
    description: number
    price: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type HeadphoneMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    brand?: true
    type?: true
    formFactor?: true
    connectivity?: true
    resistance?: true
    color?: true
    condition?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type HeadphoneMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    brand?: true
    type?: true
    formFactor?: true
    connectivity?: true
    resistance?: true
    color?: true
    condition?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type HeadphoneCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    brand?: true
    type?: true
    formFactor?: true
    connectivity?: true
    resistance?: true
    color?: true
    condition?: true
    features?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type HeadphoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Headphone to aggregate.
     */
    where?: HeadphoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headphones to fetch.
     */
    orderBy?: HeadphoneOrderByWithRelationInput | HeadphoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeadphoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headphones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headphones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Headphones
    **/
    _count?: true | HeadphoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadphoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadphoneMaxAggregateInputType
  }

  export type GetHeadphoneAggregateType<T extends HeadphoneAggregateArgs> = {
        [P in keyof T & keyof AggregateHeadphone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeadphone[P]>
      : GetScalarType<T[P], AggregateHeadphone[P]>
  }




  export type HeadphoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadphoneWhereInput
    orderBy?: HeadphoneOrderByWithAggregationInput | HeadphoneOrderByWithAggregationInput[]
    by: HeadphoneScalarFieldEnum[] | HeadphoneScalarFieldEnum
    having?: HeadphoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadphoneCountAggregateInputType | true
    _min?: HeadphoneMinAggregateInputType
    _max?: HeadphoneMaxAggregateInputType
  }

  export type HeadphoneGroupByOutputType = {
    id: string
    title: string
    category: string
    subcategory: string
    location: $Enums.KenyanCounty
    brand: $Enums.HeadphoneBrand
    type: $Enums.HeadphoneType
    formFactor: $Enums.HeadphoneFormFactor
    connectivity: $Enums.HeadphoneConnectivity
    resistance: string | null
    color: string
    condition: $Enums.Condition
    features: $Enums.HeadphoneFeature[]
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: HeadphoneCountAggregateOutputType | null
    _min: HeadphoneMinAggregateOutputType | null
    _max: HeadphoneMaxAggregateOutputType | null
  }

  type GetHeadphoneGroupByPayload<T extends HeadphoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeadphoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadphoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadphoneGroupByOutputType[P]>
            : GetScalarType<T[P], HeadphoneGroupByOutputType[P]>
        }
      >
    >


  export type HeadphoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    type?: boolean
    formFactor?: boolean
    connectivity?: boolean
    resistance?: boolean
    color?: boolean
    condition?: boolean
    features?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headphone"]>

  export type HeadphoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    type?: boolean
    formFactor?: boolean
    connectivity?: boolean
    resistance?: boolean
    color?: boolean
    condition?: boolean
    features?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headphone"]>

  export type HeadphoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    type?: boolean
    formFactor?: boolean
    connectivity?: boolean
    resistance?: boolean
    color?: boolean
    condition?: boolean
    features?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["headphone"]>

  export type HeadphoneSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    type?: boolean
    formFactor?: boolean
    connectivity?: boolean
    resistance?: boolean
    color?: boolean
    condition?: boolean
    features?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type HeadphoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "subcategory" | "location" | "brand" | "type" | "formFactor" | "connectivity" | "resistance" | "color" | "condition" | "features" | "exchangePossible" | "openToNegotiation" | "description" | "price" | "phoneNumber" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["headphone"]>
  export type HeadphoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HeadphoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HeadphoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HeadphonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Headphone"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      subcategory: string
      location: $Enums.KenyanCounty
      brand: $Enums.HeadphoneBrand
      type: $Enums.HeadphoneType
      formFactor: $Enums.HeadphoneFormFactor
      connectivity: $Enums.HeadphoneConnectivity
      resistance: string | null
      color: string
      condition: $Enums.Condition
      features: $Enums.HeadphoneFeature[]
      exchangePossible: $Enums.ExchangePossible
      openToNegotiation: $Enums.OpenToNegotiation
      description: string
      price: string
      phoneNumber: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["headphone"]>
    composites: {}
  }

  type HeadphoneGetPayload<S extends boolean | null | undefined | HeadphoneDefaultArgs> = $Result.GetResult<Prisma.$HeadphonePayload, S>

  type HeadphoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeadphoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeadphoneCountAggregateInputType | true
    }

  export interface HeadphoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Headphone'], meta: { name: 'Headphone' } }
    /**
     * Find zero or one Headphone that matches the filter.
     * @param {HeadphoneFindUniqueArgs} args - Arguments to find a Headphone
     * @example
     * // Get one Headphone
     * const headphone = await prisma.headphone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeadphoneFindUniqueArgs>(args: SelectSubset<T, HeadphoneFindUniqueArgs<ExtArgs>>): Prisma__HeadphoneClient<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Headphone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeadphoneFindUniqueOrThrowArgs} args - Arguments to find a Headphone
     * @example
     * // Get one Headphone
     * const headphone = await prisma.headphone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeadphoneFindUniqueOrThrowArgs>(args: SelectSubset<T, HeadphoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeadphoneClient<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Headphone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadphoneFindFirstArgs} args - Arguments to find a Headphone
     * @example
     * // Get one Headphone
     * const headphone = await prisma.headphone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeadphoneFindFirstArgs>(args?: SelectSubset<T, HeadphoneFindFirstArgs<ExtArgs>>): Prisma__HeadphoneClient<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Headphone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadphoneFindFirstOrThrowArgs} args - Arguments to find a Headphone
     * @example
     * // Get one Headphone
     * const headphone = await prisma.headphone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeadphoneFindFirstOrThrowArgs>(args?: SelectSubset<T, HeadphoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeadphoneClient<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Headphones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadphoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Headphones
     * const headphones = await prisma.headphone.findMany()
     * 
     * // Get first 10 Headphones
     * const headphones = await prisma.headphone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headphoneWithIdOnly = await prisma.headphone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeadphoneFindManyArgs>(args?: SelectSubset<T, HeadphoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Headphone.
     * @param {HeadphoneCreateArgs} args - Arguments to create a Headphone.
     * @example
     * // Create one Headphone
     * const Headphone = await prisma.headphone.create({
     *   data: {
     *     // ... data to create a Headphone
     *   }
     * })
     * 
     */
    create<T extends HeadphoneCreateArgs>(args: SelectSubset<T, HeadphoneCreateArgs<ExtArgs>>): Prisma__HeadphoneClient<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Headphones.
     * @param {HeadphoneCreateManyArgs} args - Arguments to create many Headphones.
     * @example
     * // Create many Headphones
     * const headphone = await prisma.headphone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeadphoneCreateManyArgs>(args?: SelectSubset<T, HeadphoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Headphones and returns the data saved in the database.
     * @param {HeadphoneCreateManyAndReturnArgs} args - Arguments to create many Headphones.
     * @example
     * // Create many Headphones
     * const headphone = await prisma.headphone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Headphones and only return the `id`
     * const headphoneWithIdOnly = await prisma.headphone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeadphoneCreateManyAndReturnArgs>(args?: SelectSubset<T, HeadphoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Headphone.
     * @param {HeadphoneDeleteArgs} args - Arguments to delete one Headphone.
     * @example
     * // Delete one Headphone
     * const Headphone = await prisma.headphone.delete({
     *   where: {
     *     // ... filter to delete one Headphone
     *   }
     * })
     * 
     */
    delete<T extends HeadphoneDeleteArgs>(args: SelectSubset<T, HeadphoneDeleteArgs<ExtArgs>>): Prisma__HeadphoneClient<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Headphone.
     * @param {HeadphoneUpdateArgs} args - Arguments to update one Headphone.
     * @example
     * // Update one Headphone
     * const headphone = await prisma.headphone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeadphoneUpdateArgs>(args: SelectSubset<T, HeadphoneUpdateArgs<ExtArgs>>): Prisma__HeadphoneClient<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Headphones.
     * @param {HeadphoneDeleteManyArgs} args - Arguments to filter Headphones to delete.
     * @example
     * // Delete a few Headphones
     * const { count } = await prisma.headphone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeadphoneDeleteManyArgs>(args?: SelectSubset<T, HeadphoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headphones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadphoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Headphones
     * const headphone = await prisma.headphone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeadphoneUpdateManyArgs>(args: SelectSubset<T, HeadphoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headphones and returns the data updated in the database.
     * @param {HeadphoneUpdateManyAndReturnArgs} args - Arguments to update many Headphones.
     * @example
     * // Update many Headphones
     * const headphone = await prisma.headphone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Headphones and only return the `id`
     * const headphoneWithIdOnly = await prisma.headphone.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeadphoneUpdateManyAndReturnArgs>(args: SelectSubset<T, HeadphoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Headphone.
     * @param {HeadphoneUpsertArgs} args - Arguments to update or create a Headphone.
     * @example
     * // Update or create a Headphone
     * const headphone = await prisma.headphone.upsert({
     *   create: {
     *     // ... data to create a Headphone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Headphone we want to update
     *   }
     * })
     */
    upsert<T extends HeadphoneUpsertArgs>(args: SelectSubset<T, HeadphoneUpsertArgs<ExtArgs>>): Prisma__HeadphoneClient<$Result.GetResult<Prisma.$HeadphonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Headphones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadphoneCountArgs} args - Arguments to filter Headphones to count.
     * @example
     * // Count the number of Headphones
     * const count = await prisma.headphone.count({
     *   where: {
     *     // ... the filter for the Headphones we want to count
     *   }
     * })
    **/
    count<T extends HeadphoneCountArgs>(
      args?: Subset<T, HeadphoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadphoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Headphone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadphoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeadphoneAggregateArgs>(args: Subset<T, HeadphoneAggregateArgs>): Prisma.PrismaPromise<GetHeadphoneAggregateType<T>>

    /**
     * Group by Headphone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadphoneGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HeadphoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeadphoneGroupByArgs['orderBy'] }
        : { orderBy?: HeadphoneGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HeadphoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadphoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Headphone model
   */
  readonly fields: HeadphoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Headphone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeadphoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Headphone model
   */
  interface HeadphoneFieldRefs {
    readonly id: FieldRef<"Headphone", 'String'>
    readonly title: FieldRef<"Headphone", 'String'>
    readonly category: FieldRef<"Headphone", 'String'>
    readonly subcategory: FieldRef<"Headphone", 'String'>
    readonly location: FieldRef<"Headphone", 'KenyanCounty'>
    readonly brand: FieldRef<"Headphone", 'HeadphoneBrand'>
    readonly type: FieldRef<"Headphone", 'HeadphoneType'>
    readonly formFactor: FieldRef<"Headphone", 'HeadphoneFormFactor'>
    readonly connectivity: FieldRef<"Headphone", 'HeadphoneConnectivity'>
    readonly resistance: FieldRef<"Headphone", 'String'>
    readonly color: FieldRef<"Headphone", 'String'>
    readonly condition: FieldRef<"Headphone", 'Condition'>
    readonly features: FieldRef<"Headphone", 'HeadphoneFeature[]'>
    readonly exchangePossible: FieldRef<"Headphone", 'ExchangePossible'>
    readonly openToNegotiation: FieldRef<"Headphone", 'OpenToNegotiation'>
    readonly description: FieldRef<"Headphone", 'String'>
    readonly price: FieldRef<"Headphone", 'String'>
    readonly phoneNumber: FieldRef<"Headphone", 'String'>
    readonly createdAt: FieldRef<"Headphone", 'DateTime'>
    readonly updatedAt: FieldRef<"Headphone", 'DateTime'>
    readonly createdById: FieldRef<"Headphone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Headphone findUnique
   */
  export type HeadphoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    /**
     * Filter, which Headphone to fetch.
     */
    where: HeadphoneWhereUniqueInput
  }

  /**
   * Headphone findUniqueOrThrow
   */
  export type HeadphoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    /**
     * Filter, which Headphone to fetch.
     */
    where: HeadphoneWhereUniqueInput
  }

  /**
   * Headphone findFirst
   */
  export type HeadphoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    /**
     * Filter, which Headphone to fetch.
     */
    where?: HeadphoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headphones to fetch.
     */
    orderBy?: HeadphoneOrderByWithRelationInput | HeadphoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Headphones.
     */
    cursor?: HeadphoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headphones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headphones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Headphones.
     */
    distinct?: HeadphoneScalarFieldEnum | HeadphoneScalarFieldEnum[]
  }

  /**
   * Headphone findFirstOrThrow
   */
  export type HeadphoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    /**
     * Filter, which Headphone to fetch.
     */
    where?: HeadphoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headphones to fetch.
     */
    orderBy?: HeadphoneOrderByWithRelationInput | HeadphoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Headphones.
     */
    cursor?: HeadphoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headphones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headphones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Headphones.
     */
    distinct?: HeadphoneScalarFieldEnum | HeadphoneScalarFieldEnum[]
  }

  /**
   * Headphone findMany
   */
  export type HeadphoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    /**
     * Filter, which Headphones to fetch.
     */
    where?: HeadphoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headphones to fetch.
     */
    orderBy?: HeadphoneOrderByWithRelationInput | HeadphoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Headphones.
     */
    cursor?: HeadphoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headphones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headphones.
     */
    skip?: number
    distinct?: HeadphoneScalarFieldEnum | HeadphoneScalarFieldEnum[]
  }

  /**
   * Headphone create
   */
  export type HeadphoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Headphone.
     */
    data: XOR<HeadphoneCreateInput, HeadphoneUncheckedCreateInput>
  }

  /**
   * Headphone createMany
   */
  export type HeadphoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Headphones.
     */
    data: HeadphoneCreateManyInput | HeadphoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Headphone createManyAndReturn
   */
  export type HeadphoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * The data used to create many Headphones.
     */
    data: HeadphoneCreateManyInput | HeadphoneCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Headphone update
   */
  export type HeadphoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Headphone.
     */
    data: XOR<HeadphoneUpdateInput, HeadphoneUncheckedUpdateInput>
    /**
     * Choose, which Headphone to update.
     */
    where: HeadphoneWhereUniqueInput
  }

  /**
   * Headphone updateMany
   */
  export type HeadphoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Headphones.
     */
    data: XOR<HeadphoneUpdateManyMutationInput, HeadphoneUncheckedUpdateManyInput>
    /**
     * Filter which Headphones to update
     */
    where?: HeadphoneWhereInput
    /**
     * Limit how many Headphones to update.
     */
    limit?: number
  }

  /**
   * Headphone updateManyAndReturn
   */
  export type HeadphoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * The data used to update Headphones.
     */
    data: XOR<HeadphoneUpdateManyMutationInput, HeadphoneUncheckedUpdateManyInput>
    /**
     * Filter which Headphones to update
     */
    where?: HeadphoneWhereInput
    /**
     * Limit how many Headphones to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Headphone upsert
   */
  export type HeadphoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Headphone to update in case it exists.
     */
    where: HeadphoneWhereUniqueInput
    /**
     * In case the Headphone found by the `where` argument doesn't exist, create a new Headphone with this data.
     */
    create: XOR<HeadphoneCreateInput, HeadphoneUncheckedCreateInput>
    /**
     * In case the Headphone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeadphoneUpdateInput, HeadphoneUncheckedUpdateInput>
  }

  /**
   * Headphone delete
   */
  export type HeadphoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
    /**
     * Filter which Headphone to delete.
     */
    where: HeadphoneWhereUniqueInput
  }

  /**
   * Headphone deleteMany
   */
  export type HeadphoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Headphones to delete
     */
    where?: HeadphoneWhereInput
    /**
     * Limit how many Headphones to delete.
     */
    limit?: number
  }

  /**
   * Headphone without action
   */
  export type HeadphoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Headphone
     */
    select?: HeadphoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Headphone
     */
    omit?: HeadphoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HeadphoneInclude<ExtArgs> | null
  }


  /**
   * Model Bag
   */

  export type AggregateBag = {
    _count: BagCountAggregateOutputType | null
    _min: BagMinAggregateOutputType | null
    _max: BagMaxAggregateOutputType | null
  }

  export type BagMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    location: $Enums.KenyanCounty | null
    brand: $Enums.BagBrand | null
    gender: $Enums.BagGender | null
    type: $Enums.BagType | null
    color: string | null
    condition: $Enums.Condition | null
    exchangePossible: $Enums.ExchangePossible | null
    openToNegotiation: $Enums.OpenToNegotiation | null
    description: string | null
    price: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type BagMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    location: $Enums.KenyanCounty | null
    brand: $Enums.BagBrand | null
    gender: $Enums.BagGender | null
    type: $Enums.BagType | null
    color: string | null
    condition: $Enums.Condition | null
    exchangePossible: $Enums.ExchangePossible | null
    openToNegotiation: $Enums.OpenToNegotiation | null
    description: string | null
    price: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type BagCountAggregateOutputType = {
    id: number
    title: number
    category: number
    subcategory: number
    location: number
    brand: number
    gender: number
    type: number
    color: number
    condition: number
    exchangePossible: number
    openToNegotiation: number
    description: number
    price: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type BagMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    brand?: true
    gender?: true
    type?: true
    color?: true
    condition?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type BagMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    brand?: true
    gender?: true
    type?: true
    color?: true
    condition?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type BagCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    brand?: true
    gender?: true
    type?: true
    color?: true
    condition?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type BagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bag to aggregate.
     */
    where?: BagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bags to fetch.
     */
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bags
    **/
    _count?: true | BagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BagMaxAggregateInputType
  }

  export type GetBagAggregateType<T extends BagAggregateArgs> = {
        [P in keyof T & keyof AggregateBag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBag[P]>
      : GetScalarType<T[P], AggregateBag[P]>
  }




  export type BagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BagWhereInput
    orderBy?: BagOrderByWithAggregationInput | BagOrderByWithAggregationInput[]
    by: BagScalarFieldEnum[] | BagScalarFieldEnum
    having?: BagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BagCountAggregateInputType | true
    _min?: BagMinAggregateInputType
    _max?: BagMaxAggregateInputType
  }

  export type BagGroupByOutputType = {
    id: string
    title: string
    category: string
    subcategory: string
    location: $Enums.KenyanCounty
    brand: $Enums.BagBrand
    gender: $Enums.BagGender
    type: $Enums.BagType
    color: string
    condition: $Enums.Condition
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: BagCountAggregateOutputType | null
    _min: BagMinAggregateOutputType | null
    _max: BagMaxAggregateOutputType | null
  }

  type GetBagGroupByPayload<T extends BagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BagGroupByOutputType[P]>
            : GetScalarType<T[P], BagGroupByOutputType[P]>
        }
      >
    >


  export type BagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    gender?: boolean
    type?: boolean
    color?: boolean
    condition?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bag"]>

  export type BagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    gender?: boolean
    type?: boolean
    color?: boolean
    condition?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bag"]>

  export type BagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    gender?: boolean
    type?: boolean
    color?: boolean
    condition?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bag"]>

  export type BagSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    gender?: boolean
    type?: boolean
    color?: boolean
    condition?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type BagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "subcategory" | "location" | "brand" | "gender" | "type" | "color" | "condition" | "exchangePossible" | "openToNegotiation" | "description" | "price" | "phoneNumber" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["bag"]>
  export type BagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bag"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      subcategory: string
      location: $Enums.KenyanCounty
      brand: $Enums.BagBrand
      gender: $Enums.BagGender
      type: $Enums.BagType
      color: string
      condition: $Enums.Condition
      exchangePossible: $Enums.ExchangePossible
      openToNegotiation: $Enums.OpenToNegotiation
      description: string
      price: string
      phoneNumber: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["bag"]>
    composites: {}
  }

  type BagGetPayload<S extends boolean | null | undefined | BagDefaultArgs> = $Result.GetResult<Prisma.$BagPayload, S>

  type BagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BagCountAggregateInputType | true
    }

  export interface BagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bag'], meta: { name: 'Bag' } }
    /**
     * Find zero or one Bag that matches the filter.
     * @param {BagFindUniqueArgs} args - Arguments to find a Bag
     * @example
     * // Get one Bag
     * const bag = await prisma.bag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BagFindUniqueArgs>(args: SelectSubset<T, BagFindUniqueArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BagFindUniqueOrThrowArgs} args - Arguments to find a Bag
     * @example
     * // Get one Bag
     * const bag = await prisma.bag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BagFindUniqueOrThrowArgs>(args: SelectSubset<T, BagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagFindFirstArgs} args - Arguments to find a Bag
     * @example
     * // Get one Bag
     * const bag = await prisma.bag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BagFindFirstArgs>(args?: SelectSubset<T, BagFindFirstArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagFindFirstOrThrowArgs} args - Arguments to find a Bag
     * @example
     * // Get one Bag
     * const bag = await prisma.bag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BagFindFirstOrThrowArgs>(args?: SelectSubset<T, BagFindFirstOrThrowArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bags
     * const bags = await prisma.bag.findMany()
     * 
     * // Get first 10 Bags
     * const bags = await prisma.bag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bagWithIdOnly = await prisma.bag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BagFindManyArgs>(args?: SelectSubset<T, BagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bag.
     * @param {BagCreateArgs} args - Arguments to create a Bag.
     * @example
     * // Create one Bag
     * const Bag = await prisma.bag.create({
     *   data: {
     *     // ... data to create a Bag
     *   }
     * })
     * 
     */
    create<T extends BagCreateArgs>(args: SelectSubset<T, BagCreateArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bags.
     * @param {BagCreateManyArgs} args - Arguments to create many Bags.
     * @example
     * // Create many Bags
     * const bag = await prisma.bag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BagCreateManyArgs>(args?: SelectSubset<T, BagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bags and returns the data saved in the database.
     * @param {BagCreateManyAndReturnArgs} args - Arguments to create many Bags.
     * @example
     * // Create many Bags
     * const bag = await prisma.bag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bags and only return the `id`
     * const bagWithIdOnly = await prisma.bag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BagCreateManyAndReturnArgs>(args?: SelectSubset<T, BagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bag.
     * @param {BagDeleteArgs} args - Arguments to delete one Bag.
     * @example
     * // Delete one Bag
     * const Bag = await prisma.bag.delete({
     *   where: {
     *     // ... filter to delete one Bag
     *   }
     * })
     * 
     */
    delete<T extends BagDeleteArgs>(args: SelectSubset<T, BagDeleteArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bag.
     * @param {BagUpdateArgs} args - Arguments to update one Bag.
     * @example
     * // Update one Bag
     * const bag = await prisma.bag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BagUpdateArgs>(args: SelectSubset<T, BagUpdateArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bags.
     * @param {BagDeleteManyArgs} args - Arguments to filter Bags to delete.
     * @example
     * // Delete a few Bags
     * const { count } = await prisma.bag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BagDeleteManyArgs>(args?: SelectSubset<T, BagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bags
     * const bag = await prisma.bag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BagUpdateManyArgs>(args: SelectSubset<T, BagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bags and returns the data updated in the database.
     * @param {BagUpdateManyAndReturnArgs} args - Arguments to update many Bags.
     * @example
     * // Update many Bags
     * const bag = await prisma.bag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bags and only return the `id`
     * const bagWithIdOnly = await prisma.bag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BagUpdateManyAndReturnArgs>(args: SelectSubset<T, BagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bag.
     * @param {BagUpsertArgs} args - Arguments to update or create a Bag.
     * @example
     * // Update or create a Bag
     * const bag = await prisma.bag.upsert({
     *   create: {
     *     // ... data to create a Bag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bag we want to update
     *   }
     * })
     */
    upsert<T extends BagUpsertArgs>(args: SelectSubset<T, BagUpsertArgs<ExtArgs>>): Prisma__BagClient<$Result.GetResult<Prisma.$BagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagCountArgs} args - Arguments to filter Bags to count.
     * @example
     * // Count the number of Bags
     * const count = await prisma.bag.count({
     *   where: {
     *     // ... the filter for the Bags we want to count
     *   }
     * })
    **/
    count<T extends BagCountArgs>(
      args?: Subset<T, BagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BagAggregateArgs>(args: Subset<T, BagAggregateArgs>): Prisma.PrismaPromise<GetBagAggregateType<T>>

    /**
     * Group by Bag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BagGroupByArgs['orderBy'] }
        : { orderBy?: BagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bag model
   */
  readonly fields: BagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bag model
   */
  interface BagFieldRefs {
    readonly id: FieldRef<"Bag", 'String'>
    readonly title: FieldRef<"Bag", 'String'>
    readonly category: FieldRef<"Bag", 'String'>
    readonly subcategory: FieldRef<"Bag", 'String'>
    readonly location: FieldRef<"Bag", 'KenyanCounty'>
    readonly brand: FieldRef<"Bag", 'BagBrand'>
    readonly gender: FieldRef<"Bag", 'BagGender'>
    readonly type: FieldRef<"Bag", 'BagType'>
    readonly color: FieldRef<"Bag", 'String'>
    readonly condition: FieldRef<"Bag", 'Condition'>
    readonly exchangePossible: FieldRef<"Bag", 'ExchangePossible'>
    readonly openToNegotiation: FieldRef<"Bag", 'OpenToNegotiation'>
    readonly description: FieldRef<"Bag", 'String'>
    readonly price: FieldRef<"Bag", 'String'>
    readonly phoneNumber: FieldRef<"Bag", 'String'>
    readonly createdAt: FieldRef<"Bag", 'DateTime'>
    readonly updatedAt: FieldRef<"Bag", 'DateTime'>
    readonly createdById: FieldRef<"Bag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bag findUnique
   */
  export type BagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bag to fetch.
     */
    where: BagWhereUniqueInput
  }

  /**
   * Bag findUniqueOrThrow
   */
  export type BagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bag to fetch.
     */
    where: BagWhereUniqueInput
  }

  /**
   * Bag findFirst
   */
  export type BagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bag to fetch.
     */
    where?: BagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bags to fetch.
     */
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bags.
     */
    cursor?: BagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bags.
     */
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * Bag findFirstOrThrow
   */
  export type BagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bag to fetch.
     */
    where?: BagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bags to fetch.
     */
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bags.
     */
    cursor?: BagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bags.
     */
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * Bag findMany
   */
  export type BagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter, which Bags to fetch.
     */
    where?: BagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bags to fetch.
     */
    orderBy?: BagOrderByWithRelationInput | BagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bags.
     */
    cursor?: BagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bags.
     */
    skip?: number
    distinct?: BagScalarFieldEnum | BagScalarFieldEnum[]
  }

  /**
   * Bag create
   */
  export type BagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * The data needed to create a Bag.
     */
    data: XOR<BagCreateInput, BagUncheckedCreateInput>
  }

  /**
   * Bag createMany
   */
  export type BagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bags.
     */
    data: BagCreateManyInput | BagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bag createManyAndReturn
   */
  export type BagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * The data used to create many Bags.
     */
    data: BagCreateManyInput | BagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bag update
   */
  export type BagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * The data needed to update a Bag.
     */
    data: XOR<BagUpdateInput, BagUncheckedUpdateInput>
    /**
     * Choose, which Bag to update.
     */
    where: BagWhereUniqueInput
  }

  /**
   * Bag updateMany
   */
  export type BagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bags.
     */
    data: XOR<BagUpdateManyMutationInput, BagUncheckedUpdateManyInput>
    /**
     * Filter which Bags to update
     */
    where?: BagWhereInput
    /**
     * Limit how many Bags to update.
     */
    limit?: number
  }

  /**
   * Bag updateManyAndReturn
   */
  export type BagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * The data used to update Bags.
     */
    data: XOR<BagUpdateManyMutationInput, BagUncheckedUpdateManyInput>
    /**
     * Filter which Bags to update
     */
    where?: BagWhereInput
    /**
     * Limit how many Bags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bag upsert
   */
  export type BagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * The filter to search for the Bag to update in case it exists.
     */
    where: BagWhereUniqueInput
    /**
     * In case the Bag found by the `where` argument doesn't exist, create a new Bag with this data.
     */
    create: XOR<BagCreateInput, BagUncheckedCreateInput>
    /**
     * In case the Bag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BagUpdateInput, BagUncheckedUpdateInput>
  }

  /**
   * Bag delete
   */
  export type BagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
    /**
     * Filter which Bag to delete.
     */
    where: BagWhereUniqueInput
  }

  /**
   * Bag deleteMany
   */
  export type BagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bags to delete
     */
    where?: BagWhereInput
    /**
     * Limit how many Bags to delete.
     */
    limit?: number
  }

  /**
   * Bag without action
   */
  export type BagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bag
     */
    select?: BagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bag
     */
    omit?: BagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BagInclude<ExtArgs> | null
  }


  /**
   * Model Clothing
   */

  export type AggregateClothing = {
    _count: ClothingCountAggregateOutputType | null
    _min: ClothingMinAggregateOutputType | null
    _max: ClothingMaxAggregateOutputType | null
  }

  export type ClothingMinAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    location: $Enums.KenyanCounty | null
    brand: $Enums.ClothingBrand | null
    type: $Enums.ClothingType | null
    gender: $Enums.ClothingGender | null
    color: string | null
    condition: $Enums.Condition | null
    madeInKenya: boolean | null
    hasWarranty: boolean | null
    warrantyPeriod: string | null
    exchangePossible: $Enums.ExchangePossible | null
    openToNegotiation: $Enums.OpenToNegotiation | null
    description: string | null
    price: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type ClothingMaxAggregateOutputType = {
    id: string | null
    title: string | null
    category: string | null
    subcategory: string | null
    location: $Enums.KenyanCounty | null
    brand: $Enums.ClothingBrand | null
    type: $Enums.ClothingType | null
    gender: $Enums.ClothingGender | null
    color: string | null
    condition: $Enums.Condition | null
    madeInKenya: boolean | null
    hasWarranty: boolean | null
    warrantyPeriod: string | null
    exchangePossible: $Enums.ExchangePossible | null
    openToNegotiation: $Enums.OpenToNegotiation | null
    description: string | null
    price: string | null
    phoneNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
    createdById: string | null
  }

  export type ClothingCountAggregateOutputType = {
    id: number
    title: number
    category: number
    subcategory: number
    location: number
    brand: number
    type: number
    gender: number
    color: number
    condition: number
    madeInKenya: number
    hasWarranty: number
    warrantyPeriod: number
    exchangePossible: number
    openToNegotiation: number
    description: number
    price: number
    phoneNumber: number
    createdAt: number
    updatedAt: number
    createdById: number
    _all: number
  }


  export type ClothingMinAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    brand?: true
    type?: true
    gender?: true
    color?: true
    condition?: true
    madeInKenya?: true
    hasWarranty?: true
    warrantyPeriod?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type ClothingMaxAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    brand?: true
    type?: true
    gender?: true
    color?: true
    condition?: true
    madeInKenya?: true
    hasWarranty?: true
    warrantyPeriod?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
  }

  export type ClothingCountAggregateInputType = {
    id?: true
    title?: true
    category?: true
    subcategory?: true
    location?: true
    brand?: true
    type?: true
    gender?: true
    color?: true
    condition?: true
    madeInKenya?: true
    hasWarranty?: true
    warrantyPeriod?: true
    exchangePossible?: true
    openToNegotiation?: true
    description?: true
    price?: true
    phoneNumber?: true
    createdAt?: true
    updatedAt?: true
    createdById?: true
    _all?: true
  }

  export type ClothingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clothing to aggregate.
     */
    where?: ClothingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clothing to fetch.
     */
    orderBy?: ClothingOrderByWithRelationInput | ClothingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClothingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clothing from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clothing.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clothing
    **/
    _count?: true | ClothingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClothingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClothingMaxAggregateInputType
  }

  export type GetClothingAggregateType<T extends ClothingAggregateArgs> = {
        [P in keyof T & keyof AggregateClothing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClothing[P]>
      : GetScalarType<T[P], AggregateClothing[P]>
  }




  export type ClothingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClothingWhereInput
    orderBy?: ClothingOrderByWithAggregationInput | ClothingOrderByWithAggregationInput[]
    by: ClothingScalarFieldEnum[] | ClothingScalarFieldEnum
    having?: ClothingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClothingCountAggregateInputType | true
    _min?: ClothingMinAggregateInputType
    _max?: ClothingMaxAggregateInputType
  }

  export type ClothingGroupByOutputType = {
    id: string
    title: string
    category: string
    subcategory: string
    location: $Enums.KenyanCounty
    brand: $Enums.ClothingBrand
    type: $Enums.ClothingType
    gender: $Enums.ClothingGender
    color: string
    condition: $Enums.Condition
    madeInKenya: boolean
    hasWarranty: boolean
    warrantyPeriod: string | null
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt: Date
    updatedAt: Date
    createdById: string
    _count: ClothingCountAggregateOutputType | null
    _min: ClothingMinAggregateOutputType | null
    _max: ClothingMaxAggregateOutputType | null
  }

  type GetClothingGroupByPayload<T extends ClothingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClothingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClothingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClothingGroupByOutputType[P]>
            : GetScalarType<T[P], ClothingGroupByOutputType[P]>
        }
      >
    >


  export type ClothingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    type?: boolean
    gender?: boolean
    color?: boolean
    condition?: boolean
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clothing"]>

  export type ClothingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    type?: boolean
    gender?: boolean
    color?: boolean
    condition?: boolean
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clothing"]>

  export type ClothingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    type?: boolean
    gender?: boolean
    color?: boolean
    condition?: boolean
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clothing"]>

  export type ClothingSelectScalar = {
    id?: boolean
    title?: boolean
    category?: boolean
    subcategory?: boolean
    location?: boolean
    brand?: boolean
    type?: boolean
    gender?: boolean
    color?: boolean
    condition?: boolean
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: boolean
    exchangePossible?: boolean
    openToNegotiation?: boolean
    description?: boolean
    price?: boolean
    phoneNumber?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdById?: boolean
  }

  export type ClothingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "category" | "subcategory" | "location" | "brand" | "type" | "gender" | "color" | "condition" | "madeInKenya" | "hasWarranty" | "warrantyPeriod" | "exchangePossible" | "openToNegotiation" | "description" | "price" | "phoneNumber" | "createdAt" | "updatedAt" | "createdById", ExtArgs["result"]["clothing"]>
  export type ClothingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClothingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ClothingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ClothingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clothing"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      category: string
      subcategory: string
      location: $Enums.KenyanCounty
      brand: $Enums.ClothingBrand
      type: $Enums.ClothingType
      gender: $Enums.ClothingGender
      color: string
      condition: $Enums.Condition
      madeInKenya: boolean
      hasWarranty: boolean
      warrantyPeriod: string | null
      exchangePossible: $Enums.ExchangePossible
      openToNegotiation: $Enums.OpenToNegotiation
      description: string
      price: string
      phoneNumber: string
      createdAt: Date
      updatedAt: Date
      createdById: string
    }, ExtArgs["result"]["clothing"]>
    composites: {}
  }

  type ClothingGetPayload<S extends boolean | null | undefined | ClothingDefaultArgs> = $Result.GetResult<Prisma.$ClothingPayload, S>

  type ClothingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClothingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClothingCountAggregateInputType | true
    }

  export interface ClothingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clothing'], meta: { name: 'Clothing' } }
    /**
     * Find zero or one Clothing that matches the filter.
     * @param {ClothingFindUniqueArgs} args - Arguments to find a Clothing
     * @example
     * // Get one Clothing
     * const clothing = await prisma.clothing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClothingFindUniqueArgs>(args: SelectSubset<T, ClothingFindUniqueArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Clothing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClothingFindUniqueOrThrowArgs} args - Arguments to find a Clothing
     * @example
     * // Get one Clothing
     * const clothing = await prisma.clothing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClothingFindUniqueOrThrowArgs>(args: SelectSubset<T, ClothingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clothing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingFindFirstArgs} args - Arguments to find a Clothing
     * @example
     * // Get one Clothing
     * const clothing = await prisma.clothing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClothingFindFirstArgs>(args?: SelectSubset<T, ClothingFindFirstArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Clothing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingFindFirstOrThrowArgs} args - Arguments to find a Clothing
     * @example
     * // Get one Clothing
     * const clothing = await prisma.clothing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClothingFindFirstOrThrowArgs>(args?: SelectSubset<T, ClothingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clothing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clothing
     * const clothing = await prisma.clothing.findMany()
     * 
     * // Get first 10 Clothing
     * const clothing = await prisma.clothing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clothingWithIdOnly = await prisma.clothing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClothingFindManyArgs>(args?: SelectSubset<T, ClothingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Clothing.
     * @param {ClothingCreateArgs} args - Arguments to create a Clothing.
     * @example
     * // Create one Clothing
     * const Clothing = await prisma.clothing.create({
     *   data: {
     *     // ... data to create a Clothing
     *   }
     * })
     * 
     */
    create<T extends ClothingCreateArgs>(args: SelectSubset<T, ClothingCreateArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clothing.
     * @param {ClothingCreateManyArgs} args - Arguments to create many Clothing.
     * @example
     * // Create many Clothing
     * const clothing = await prisma.clothing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClothingCreateManyArgs>(args?: SelectSubset<T, ClothingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clothing and returns the data saved in the database.
     * @param {ClothingCreateManyAndReturnArgs} args - Arguments to create many Clothing.
     * @example
     * // Create many Clothing
     * const clothing = await prisma.clothing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clothing and only return the `id`
     * const clothingWithIdOnly = await prisma.clothing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClothingCreateManyAndReturnArgs>(args?: SelectSubset<T, ClothingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Clothing.
     * @param {ClothingDeleteArgs} args - Arguments to delete one Clothing.
     * @example
     * // Delete one Clothing
     * const Clothing = await prisma.clothing.delete({
     *   where: {
     *     // ... filter to delete one Clothing
     *   }
     * })
     * 
     */
    delete<T extends ClothingDeleteArgs>(args: SelectSubset<T, ClothingDeleteArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Clothing.
     * @param {ClothingUpdateArgs} args - Arguments to update one Clothing.
     * @example
     * // Update one Clothing
     * const clothing = await prisma.clothing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClothingUpdateArgs>(args: SelectSubset<T, ClothingUpdateArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clothing.
     * @param {ClothingDeleteManyArgs} args - Arguments to filter Clothing to delete.
     * @example
     * // Delete a few Clothing
     * const { count } = await prisma.clothing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClothingDeleteManyArgs>(args?: SelectSubset<T, ClothingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clothing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clothing
     * const clothing = await prisma.clothing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClothingUpdateManyArgs>(args: SelectSubset<T, ClothingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clothing and returns the data updated in the database.
     * @param {ClothingUpdateManyAndReturnArgs} args - Arguments to update many Clothing.
     * @example
     * // Update many Clothing
     * const clothing = await prisma.clothing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clothing and only return the `id`
     * const clothingWithIdOnly = await prisma.clothing.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClothingUpdateManyAndReturnArgs>(args: SelectSubset<T, ClothingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Clothing.
     * @param {ClothingUpsertArgs} args - Arguments to update or create a Clothing.
     * @example
     * // Update or create a Clothing
     * const clothing = await prisma.clothing.upsert({
     *   create: {
     *     // ... data to create a Clothing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clothing we want to update
     *   }
     * })
     */
    upsert<T extends ClothingUpsertArgs>(args: SelectSubset<T, ClothingUpsertArgs<ExtArgs>>): Prisma__ClothingClient<$Result.GetResult<Prisma.$ClothingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clothing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingCountArgs} args - Arguments to filter Clothing to count.
     * @example
     * // Count the number of Clothing
     * const count = await prisma.clothing.count({
     *   where: {
     *     // ... the filter for the Clothing we want to count
     *   }
     * })
    **/
    count<T extends ClothingCountArgs>(
      args?: Subset<T, ClothingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClothingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clothing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClothingAggregateArgs>(args: Subset<T, ClothingAggregateArgs>): Prisma.PrismaPromise<GetClothingAggregateType<T>>

    /**
     * Group by Clothing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClothingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClothingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClothingGroupByArgs['orderBy'] }
        : { orderBy?: ClothingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClothingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClothingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clothing model
   */
  readonly fields: ClothingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clothing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClothingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Clothing model
   */
  interface ClothingFieldRefs {
    readonly id: FieldRef<"Clothing", 'String'>
    readonly title: FieldRef<"Clothing", 'String'>
    readonly category: FieldRef<"Clothing", 'String'>
    readonly subcategory: FieldRef<"Clothing", 'String'>
    readonly location: FieldRef<"Clothing", 'KenyanCounty'>
    readonly brand: FieldRef<"Clothing", 'ClothingBrand'>
    readonly type: FieldRef<"Clothing", 'ClothingType'>
    readonly gender: FieldRef<"Clothing", 'ClothingGender'>
    readonly color: FieldRef<"Clothing", 'String'>
    readonly condition: FieldRef<"Clothing", 'Condition'>
    readonly madeInKenya: FieldRef<"Clothing", 'Boolean'>
    readonly hasWarranty: FieldRef<"Clothing", 'Boolean'>
    readonly warrantyPeriod: FieldRef<"Clothing", 'String'>
    readonly exchangePossible: FieldRef<"Clothing", 'ExchangePossible'>
    readonly openToNegotiation: FieldRef<"Clothing", 'OpenToNegotiation'>
    readonly description: FieldRef<"Clothing", 'String'>
    readonly price: FieldRef<"Clothing", 'String'>
    readonly phoneNumber: FieldRef<"Clothing", 'String'>
    readonly createdAt: FieldRef<"Clothing", 'DateTime'>
    readonly updatedAt: FieldRef<"Clothing", 'DateTime'>
    readonly createdById: FieldRef<"Clothing", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Clothing findUnique
   */
  export type ClothingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where: ClothingWhereUniqueInput
  }

  /**
   * Clothing findUniqueOrThrow
   */
  export type ClothingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where: ClothingWhereUniqueInput
  }

  /**
   * Clothing findFirst
   */
  export type ClothingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where?: ClothingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clothing to fetch.
     */
    orderBy?: ClothingOrderByWithRelationInput | ClothingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clothing.
     */
    cursor?: ClothingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clothing from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clothing.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clothing.
     */
    distinct?: ClothingScalarFieldEnum | ClothingScalarFieldEnum[]
  }

  /**
   * Clothing findFirstOrThrow
   */
  export type ClothingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where?: ClothingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clothing to fetch.
     */
    orderBy?: ClothingOrderByWithRelationInput | ClothingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clothing.
     */
    cursor?: ClothingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clothing from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clothing.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clothing.
     */
    distinct?: ClothingScalarFieldEnum | ClothingScalarFieldEnum[]
  }

  /**
   * Clothing findMany
   */
  export type ClothingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter, which Clothing to fetch.
     */
    where?: ClothingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clothing to fetch.
     */
    orderBy?: ClothingOrderByWithRelationInput | ClothingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clothing.
     */
    cursor?: ClothingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clothing from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clothing.
     */
    skip?: number
    distinct?: ClothingScalarFieldEnum | ClothingScalarFieldEnum[]
  }

  /**
   * Clothing create
   */
  export type ClothingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * The data needed to create a Clothing.
     */
    data: XOR<ClothingCreateInput, ClothingUncheckedCreateInput>
  }

  /**
   * Clothing createMany
   */
  export type ClothingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clothing.
     */
    data: ClothingCreateManyInput | ClothingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Clothing createManyAndReturn
   */
  export type ClothingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * The data used to create many Clothing.
     */
    data: ClothingCreateManyInput | ClothingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clothing update
   */
  export type ClothingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * The data needed to update a Clothing.
     */
    data: XOR<ClothingUpdateInput, ClothingUncheckedUpdateInput>
    /**
     * Choose, which Clothing to update.
     */
    where: ClothingWhereUniqueInput
  }

  /**
   * Clothing updateMany
   */
  export type ClothingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clothing.
     */
    data: XOR<ClothingUpdateManyMutationInput, ClothingUncheckedUpdateManyInput>
    /**
     * Filter which Clothing to update
     */
    where?: ClothingWhereInput
    /**
     * Limit how many Clothing to update.
     */
    limit?: number
  }

  /**
   * Clothing updateManyAndReturn
   */
  export type ClothingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * The data used to update Clothing.
     */
    data: XOR<ClothingUpdateManyMutationInput, ClothingUncheckedUpdateManyInput>
    /**
     * Filter which Clothing to update
     */
    where?: ClothingWhereInput
    /**
     * Limit how many Clothing to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Clothing upsert
   */
  export type ClothingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * The filter to search for the Clothing to update in case it exists.
     */
    where: ClothingWhereUniqueInput
    /**
     * In case the Clothing found by the `where` argument doesn't exist, create a new Clothing with this data.
     */
    create: XOR<ClothingCreateInput, ClothingUncheckedCreateInput>
    /**
     * In case the Clothing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClothingUpdateInput, ClothingUncheckedUpdateInput>
  }

  /**
   * Clothing delete
   */
  export type ClothingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
    /**
     * Filter which Clothing to delete.
     */
    where: ClothingWhereUniqueInput
  }

  /**
   * Clothing deleteMany
   */
  export type ClothingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clothing to delete
     */
    where?: ClothingWhereInput
    /**
     * Limit how many Clothing to delete.
     */
    limit?: number
  }

  /**
   * Clothing without action
   */
  export type ClothingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clothing
     */
    select?: ClothingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Clothing
     */
    omit?: ClothingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClothingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PostScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    expiresAt: 'expiresAt',
    token: 'token',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    providerId: 'providerId',
    userId: 'userId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const LaptopComputerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    subcategory: 'subcategory',
    location: 'location',
    type: 'type',
    brand: 'brand',
    laptopSubtype: 'laptopSubtype',
    desktopSubtype: 'desktopSubtype',
    serverSubtype: 'serverSubtype',
    model: 'model',
    condition: 'condition',
    processorType: 'processorType',
    numberOfCores: 'numberOfCores',
    ram: 'ram',
    storageCapacity: 'storageCapacity',
    storageType: 'storageType',
    displaySize: 'displaySize',
    graphicsCard: 'graphicsCard',
    graphicsCardMemory: 'graphicsCardMemory',
    operatingSystem: 'operatingSystem',
    color: 'color',
    exchangePossible: 'exchangePossible',
    openToNegotiation: 'openToNegotiation',
    description: 'description',
    price: 'price',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type LaptopComputerScalarFieldEnum = (typeof LaptopComputerScalarFieldEnum)[keyof typeof LaptopComputerScalarFieldEnum]


  export const HeadphoneScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    subcategory: 'subcategory',
    location: 'location',
    brand: 'brand',
    type: 'type',
    formFactor: 'formFactor',
    connectivity: 'connectivity',
    resistance: 'resistance',
    color: 'color',
    condition: 'condition',
    features: 'features',
    exchangePossible: 'exchangePossible',
    openToNegotiation: 'openToNegotiation',
    description: 'description',
    price: 'price',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type HeadphoneScalarFieldEnum = (typeof HeadphoneScalarFieldEnum)[keyof typeof HeadphoneScalarFieldEnum]


  export const BagScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    subcategory: 'subcategory',
    location: 'location',
    brand: 'brand',
    gender: 'gender',
    type: 'type',
    color: 'color',
    condition: 'condition',
    exchangePossible: 'exchangePossible',
    openToNegotiation: 'openToNegotiation',
    description: 'description',
    price: 'price',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type BagScalarFieldEnum = (typeof BagScalarFieldEnum)[keyof typeof BagScalarFieldEnum]


  export const ClothingScalarFieldEnum: {
    id: 'id',
    title: 'title',
    category: 'category',
    subcategory: 'subcategory',
    location: 'location',
    brand: 'brand',
    type: 'type',
    gender: 'gender',
    color: 'color',
    condition: 'condition',
    madeInKenya: 'madeInKenya',
    hasWarranty: 'hasWarranty',
    warrantyPeriod: 'warrantyPeriod',
    exchangePossible: 'exchangePossible',
    openToNegotiation: 'openToNegotiation',
    description: 'description',
    price: 'price',
    phoneNumber: 'phoneNumber',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    createdById: 'createdById'
  };

  export type ClothingScalarFieldEnum = (typeof ClothingScalarFieldEnum)[keyof typeof ClothingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'KenyanCounty'
   */
  export type EnumKenyanCountyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KenyanCounty'>
    


  /**
   * Reference to a field of type 'KenyanCounty[]'
   */
  export type ListEnumKenyanCountyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KenyanCounty[]'>
    


  /**
   * Reference to a field of type 'ComputerType'
   */
  export type EnumComputerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComputerType'>
    


  /**
   * Reference to a field of type 'ComputerType[]'
   */
  export type ListEnumComputerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComputerType[]'>
    


  /**
   * Reference to a field of type 'LaptopBrand'
   */
  export type EnumLaptopBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LaptopBrand'>
    


  /**
   * Reference to a field of type 'LaptopBrand[]'
   */
  export type ListEnumLaptopBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LaptopBrand[]'>
    


  /**
   * Reference to a field of type 'LaptopSubtype'
   */
  export type EnumLaptopSubtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LaptopSubtype'>
    


  /**
   * Reference to a field of type 'LaptopSubtype[]'
   */
  export type ListEnumLaptopSubtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LaptopSubtype[]'>
    


  /**
   * Reference to a field of type 'DesktopSubtype'
   */
  export type EnumDesktopSubtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesktopSubtype'>
    


  /**
   * Reference to a field of type 'DesktopSubtype[]'
   */
  export type ListEnumDesktopSubtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DesktopSubtype[]'>
    


  /**
   * Reference to a field of type 'ServerSubtype'
   */
  export type EnumServerSubtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServerSubtype'>
    


  /**
   * Reference to a field of type 'ServerSubtype[]'
   */
  export type ListEnumServerSubtypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ServerSubtype[]'>
    


  /**
   * Reference to a field of type 'Condition'
   */
  export type EnumConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Condition'>
    


  /**
   * Reference to a field of type 'Condition[]'
   */
  export type ListEnumConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Condition[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StorageType'
   */
  export type EnumStorageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageType'>
    


  /**
   * Reference to a field of type 'StorageType[]'
   */
  export type ListEnumStorageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StorageType[]'>
    


  /**
   * Reference to a field of type 'OperatingSystem'
   */
  export type EnumOperatingSystemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperatingSystem'>
    


  /**
   * Reference to a field of type 'OperatingSystem[]'
   */
  export type ListEnumOperatingSystemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OperatingSystem[]'>
    


  /**
   * Reference to a field of type 'ExchangePossible'
   */
  export type EnumExchangePossibleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExchangePossible'>
    


  /**
   * Reference to a field of type 'ExchangePossible[]'
   */
  export type ListEnumExchangePossibleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExchangePossible[]'>
    


  /**
   * Reference to a field of type 'OpenToNegotiation'
   */
  export type EnumOpenToNegotiationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpenToNegotiation'>
    


  /**
   * Reference to a field of type 'OpenToNegotiation[]'
   */
  export type ListEnumOpenToNegotiationFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpenToNegotiation[]'>
    


  /**
   * Reference to a field of type 'HeadphoneBrand'
   */
  export type EnumHeadphoneBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneBrand'>
    


  /**
   * Reference to a field of type 'HeadphoneBrand[]'
   */
  export type ListEnumHeadphoneBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneBrand[]'>
    


  /**
   * Reference to a field of type 'HeadphoneType'
   */
  export type EnumHeadphoneTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneType'>
    


  /**
   * Reference to a field of type 'HeadphoneType[]'
   */
  export type ListEnumHeadphoneTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneType[]'>
    


  /**
   * Reference to a field of type 'HeadphoneFormFactor'
   */
  export type EnumHeadphoneFormFactorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneFormFactor'>
    


  /**
   * Reference to a field of type 'HeadphoneFormFactor[]'
   */
  export type ListEnumHeadphoneFormFactorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneFormFactor[]'>
    


  /**
   * Reference to a field of type 'HeadphoneConnectivity'
   */
  export type EnumHeadphoneConnectivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneConnectivity'>
    


  /**
   * Reference to a field of type 'HeadphoneConnectivity[]'
   */
  export type ListEnumHeadphoneConnectivityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneConnectivity[]'>
    


  /**
   * Reference to a field of type 'HeadphoneFeature[]'
   */
  export type ListEnumHeadphoneFeatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneFeature[]'>
    


  /**
   * Reference to a field of type 'HeadphoneFeature'
   */
  export type EnumHeadphoneFeatureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HeadphoneFeature'>
    


  /**
   * Reference to a field of type 'BagBrand'
   */
  export type EnumBagBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BagBrand'>
    


  /**
   * Reference to a field of type 'BagBrand[]'
   */
  export type ListEnumBagBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BagBrand[]'>
    


  /**
   * Reference to a field of type 'BagGender'
   */
  export type EnumBagGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BagGender'>
    


  /**
   * Reference to a field of type 'BagGender[]'
   */
  export type ListEnumBagGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BagGender[]'>
    


  /**
   * Reference to a field of type 'BagType'
   */
  export type EnumBagTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BagType'>
    


  /**
   * Reference to a field of type 'BagType[]'
   */
  export type ListEnumBagTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BagType[]'>
    


  /**
   * Reference to a field of type 'ClothingBrand'
   */
  export type EnumClothingBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClothingBrand'>
    


  /**
   * Reference to a field of type 'ClothingBrand[]'
   */
  export type ListEnumClothingBrandFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClothingBrand[]'>
    


  /**
   * Reference to a field of type 'ClothingType'
   */
  export type EnumClothingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClothingType'>
    


  /**
   * Reference to a field of type 'ClothingType[]'
   */
  export type ListEnumClothingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClothingType[]'>
    


  /**
   * Reference to a field of type 'ClothingGender'
   */
  export type EnumClothingGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClothingGender'>
    


  /**
   * Reference to a field of type 'ClothingGender[]'
   */
  export type ListEnumClothingGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClothingGender[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    name?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    createdById?: StringWithAggregatesFilter<"Post"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    laptopComputers?: LaptopComputerListRelationFilter
    headphones?: HeadphoneListRelationFilter
    bags?: BagListRelationFilter
    clothing?: ClothingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    laptopComputers?: LaptopComputerOrderByRelationAggregateInput
    headphones?: HeadphoneOrderByRelationAggregateInput
    bags?: BagOrderByRelationAggregateInput
    clothing?: ClothingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    posts?: PostListRelationFilter
    laptopComputers?: LaptopComputerListRelationFilter
    headphones?: HeadphoneListRelationFilter
    bags?: BagListRelationFilter
    clothing?: ClothingListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
    createdAt?: DateTimeFilter<"Verification"> | Date | string
    updatedAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type LaptopComputerWhereInput = {
    AND?: LaptopComputerWhereInput | LaptopComputerWhereInput[]
    OR?: LaptopComputerWhereInput[]
    NOT?: LaptopComputerWhereInput | LaptopComputerWhereInput[]
    id?: StringFilter<"LaptopComputer"> | string
    title?: StringFilter<"LaptopComputer"> | string
    category?: StringFilter<"LaptopComputer"> | string
    subcategory?: StringFilter<"LaptopComputer"> | string
    location?: EnumKenyanCountyFilter<"LaptopComputer"> | $Enums.KenyanCounty
    type?: EnumComputerTypeFilter<"LaptopComputer"> | $Enums.ComputerType
    brand?: EnumLaptopBrandFilter<"LaptopComputer"> | $Enums.LaptopBrand
    laptopSubtype?: EnumLaptopSubtypeNullableFilter<"LaptopComputer"> | $Enums.LaptopSubtype | null
    desktopSubtype?: EnumDesktopSubtypeNullableFilter<"LaptopComputer"> | $Enums.DesktopSubtype | null
    serverSubtype?: EnumServerSubtypeNullableFilter<"LaptopComputer"> | $Enums.ServerSubtype | null
    model?: StringNullableFilter<"LaptopComputer"> | string | null
    condition?: EnumConditionFilter<"LaptopComputer"> | $Enums.Condition
    processorType?: StringFilter<"LaptopComputer"> | string
    numberOfCores?: IntFilter<"LaptopComputer"> | number
    ram?: StringFilter<"LaptopComputer"> | string
    storageCapacity?: StringFilter<"LaptopComputer"> | string
    storageType?: EnumStorageTypeFilter<"LaptopComputer"> | $Enums.StorageType
    displaySize?: StringNullableFilter<"LaptopComputer"> | string | null
    graphicsCard?: StringNullableFilter<"LaptopComputer"> | string | null
    graphicsCardMemory?: StringNullableFilter<"LaptopComputer"> | string | null
    operatingSystem?: EnumOperatingSystemFilter<"LaptopComputer"> | $Enums.OperatingSystem
    color?: StringFilter<"LaptopComputer"> | string
    exchangePossible?: EnumExchangePossibleFilter<"LaptopComputer"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"LaptopComputer"> | $Enums.OpenToNegotiation
    description?: StringFilter<"LaptopComputer"> | string
    price?: StringFilter<"LaptopComputer"> | string
    phoneNumber?: StringFilter<"LaptopComputer"> | string
    createdAt?: DateTimeFilter<"LaptopComputer"> | Date | string
    updatedAt?: DateTimeFilter<"LaptopComputer"> | Date | string
    createdById?: StringFilter<"LaptopComputer"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LaptopComputerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    laptopSubtype?: SortOrderInput | SortOrder
    desktopSubtype?: SortOrderInput | SortOrder
    serverSubtype?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    condition?: SortOrder
    processorType?: SortOrder
    numberOfCores?: SortOrder
    ram?: SortOrder
    storageCapacity?: SortOrder
    storageType?: SortOrder
    displaySize?: SortOrderInput | SortOrder
    graphicsCard?: SortOrderInput | SortOrder
    graphicsCardMemory?: SortOrderInput | SortOrder
    operatingSystem?: SortOrder
    color?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type LaptopComputerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LaptopComputerWhereInput | LaptopComputerWhereInput[]
    OR?: LaptopComputerWhereInput[]
    NOT?: LaptopComputerWhereInput | LaptopComputerWhereInput[]
    title?: StringFilter<"LaptopComputer"> | string
    category?: StringFilter<"LaptopComputer"> | string
    subcategory?: StringFilter<"LaptopComputer"> | string
    location?: EnumKenyanCountyFilter<"LaptopComputer"> | $Enums.KenyanCounty
    type?: EnumComputerTypeFilter<"LaptopComputer"> | $Enums.ComputerType
    brand?: EnumLaptopBrandFilter<"LaptopComputer"> | $Enums.LaptopBrand
    laptopSubtype?: EnumLaptopSubtypeNullableFilter<"LaptopComputer"> | $Enums.LaptopSubtype | null
    desktopSubtype?: EnumDesktopSubtypeNullableFilter<"LaptopComputer"> | $Enums.DesktopSubtype | null
    serverSubtype?: EnumServerSubtypeNullableFilter<"LaptopComputer"> | $Enums.ServerSubtype | null
    model?: StringNullableFilter<"LaptopComputer"> | string | null
    condition?: EnumConditionFilter<"LaptopComputer"> | $Enums.Condition
    processorType?: StringFilter<"LaptopComputer"> | string
    numberOfCores?: IntFilter<"LaptopComputer"> | number
    ram?: StringFilter<"LaptopComputer"> | string
    storageCapacity?: StringFilter<"LaptopComputer"> | string
    storageType?: EnumStorageTypeFilter<"LaptopComputer"> | $Enums.StorageType
    displaySize?: StringNullableFilter<"LaptopComputer"> | string | null
    graphicsCard?: StringNullableFilter<"LaptopComputer"> | string | null
    graphicsCardMemory?: StringNullableFilter<"LaptopComputer"> | string | null
    operatingSystem?: EnumOperatingSystemFilter<"LaptopComputer"> | $Enums.OperatingSystem
    color?: StringFilter<"LaptopComputer"> | string
    exchangePossible?: EnumExchangePossibleFilter<"LaptopComputer"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"LaptopComputer"> | $Enums.OpenToNegotiation
    description?: StringFilter<"LaptopComputer"> | string
    price?: StringFilter<"LaptopComputer"> | string
    phoneNumber?: StringFilter<"LaptopComputer"> | string
    createdAt?: DateTimeFilter<"LaptopComputer"> | Date | string
    updatedAt?: DateTimeFilter<"LaptopComputer"> | Date | string
    createdById?: StringFilter<"LaptopComputer"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type LaptopComputerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    laptopSubtype?: SortOrderInput | SortOrder
    desktopSubtype?: SortOrderInput | SortOrder
    serverSubtype?: SortOrderInput | SortOrder
    model?: SortOrderInput | SortOrder
    condition?: SortOrder
    processorType?: SortOrder
    numberOfCores?: SortOrder
    ram?: SortOrder
    storageCapacity?: SortOrder
    storageType?: SortOrder
    displaySize?: SortOrderInput | SortOrder
    graphicsCard?: SortOrderInput | SortOrder
    graphicsCardMemory?: SortOrderInput | SortOrder
    operatingSystem?: SortOrder
    color?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: LaptopComputerCountOrderByAggregateInput
    _avg?: LaptopComputerAvgOrderByAggregateInput
    _max?: LaptopComputerMaxOrderByAggregateInput
    _min?: LaptopComputerMinOrderByAggregateInput
    _sum?: LaptopComputerSumOrderByAggregateInput
  }

  export type LaptopComputerScalarWhereWithAggregatesInput = {
    AND?: LaptopComputerScalarWhereWithAggregatesInput | LaptopComputerScalarWhereWithAggregatesInput[]
    OR?: LaptopComputerScalarWhereWithAggregatesInput[]
    NOT?: LaptopComputerScalarWhereWithAggregatesInput | LaptopComputerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LaptopComputer"> | string
    title?: StringWithAggregatesFilter<"LaptopComputer"> | string
    category?: StringWithAggregatesFilter<"LaptopComputer"> | string
    subcategory?: StringWithAggregatesFilter<"LaptopComputer"> | string
    location?: EnumKenyanCountyWithAggregatesFilter<"LaptopComputer"> | $Enums.KenyanCounty
    type?: EnumComputerTypeWithAggregatesFilter<"LaptopComputer"> | $Enums.ComputerType
    brand?: EnumLaptopBrandWithAggregatesFilter<"LaptopComputer"> | $Enums.LaptopBrand
    laptopSubtype?: EnumLaptopSubtypeNullableWithAggregatesFilter<"LaptopComputer"> | $Enums.LaptopSubtype | null
    desktopSubtype?: EnumDesktopSubtypeNullableWithAggregatesFilter<"LaptopComputer"> | $Enums.DesktopSubtype | null
    serverSubtype?: EnumServerSubtypeNullableWithAggregatesFilter<"LaptopComputer"> | $Enums.ServerSubtype | null
    model?: StringNullableWithAggregatesFilter<"LaptopComputer"> | string | null
    condition?: EnumConditionWithAggregatesFilter<"LaptopComputer"> | $Enums.Condition
    processorType?: StringWithAggregatesFilter<"LaptopComputer"> | string
    numberOfCores?: IntWithAggregatesFilter<"LaptopComputer"> | number
    ram?: StringWithAggregatesFilter<"LaptopComputer"> | string
    storageCapacity?: StringWithAggregatesFilter<"LaptopComputer"> | string
    storageType?: EnumStorageTypeWithAggregatesFilter<"LaptopComputer"> | $Enums.StorageType
    displaySize?: StringNullableWithAggregatesFilter<"LaptopComputer"> | string | null
    graphicsCard?: StringNullableWithAggregatesFilter<"LaptopComputer"> | string | null
    graphicsCardMemory?: StringNullableWithAggregatesFilter<"LaptopComputer"> | string | null
    operatingSystem?: EnumOperatingSystemWithAggregatesFilter<"LaptopComputer"> | $Enums.OperatingSystem
    color?: StringWithAggregatesFilter<"LaptopComputer"> | string
    exchangePossible?: EnumExchangePossibleWithAggregatesFilter<"LaptopComputer"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationWithAggregatesFilter<"LaptopComputer"> | $Enums.OpenToNegotiation
    description?: StringWithAggregatesFilter<"LaptopComputer"> | string
    price?: StringWithAggregatesFilter<"LaptopComputer"> | string
    phoneNumber?: StringWithAggregatesFilter<"LaptopComputer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LaptopComputer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LaptopComputer"> | Date | string
    createdById?: StringWithAggregatesFilter<"LaptopComputer"> | string
  }

  export type HeadphoneWhereInput = {
    AND?: HeadphoneWhereInput | HeadphoneWhereInput[]
    OR?: HeadphoneWhereInput[]
    NOT?: HeadphoneWhereInput | HeadphoneWhereInput[]
    id?: StringFilter<"Headphone"> | string
    title?: StringFilter<"Headphone"> | string
    category?: StringFilter<"Headphone"> | string
    subcategory?: StringFilter<"Headphone"> | string
    location?: EnumKenyanCountyFilter<"Headphone"> | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFilter<"Headphone"> | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFilter<"Headphone"> | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFilter<"Headphone"> | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFilter<"Headphone"> | $Enums.HeadphoneConnectivity
    resistance?: StringNullableFilter<"Headphone"> | string | null
    color?: StringFilter<"Headphone"> | string
    condition?: EnumConditionFilter<"Headphone"> | $Enums.Condition
    features?: EnumHeadphoneFeatureNullableListFilter<"Headphone">
    exchangePossible?: EnumExchangePossibleFilter<"Headphone"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"Headphone"> | $Enums.OpenToNegotiation
    description?: StringFilter<"Headphone"> | string
    price?: StringFilter<"Headphone"> | string
    phoneNumber?: StringFilter<"Headphone"> | string
    createdAt?: DateTimeFilter<"Headphone"> | Date | string
    updatedAt?: DateTimeFilter<"Headphone"> | Date | string
    createdById?: StringFilter<"Headphone"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HeadphoneOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    formFactor?: SortOrder
    connectivity?: SortOrder
    resistance?: SortOrderInput | SortOrder
    color?: SortOrder
    condition?: SortOrder
    features?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type HeadphoneWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HeadphoneWhereInput | HeadphoneWhereInput[]
    OR?: HeadphoneWhereInput[]
    NOT?: HeadphoneWhereInput | HeadphoneWhereInput[]
    title?: StringFilter<"Headphone"> | string
    category?: StringFilter<"Headphone"> | string
    subcategory?: StringFilter<"Headphone"> | string
    location?: EnumKenyanCountyFilter<"Headphone"> | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFilter<"Headphone"> | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFilter<"Headphone"> | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFilter<"Headphone"> | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFilter<"Headphone"> | $Enums.HeadphoneConnectivity
    resistance?: StringNullableFilter<"Headphone"> | string | null
    color?: StringFilter<"Headphone"> | string
    condition?: EnumConditionFilter<"Headphone"> | $Enums.Condition
    features?: EnumHeadphoneFeatureNullableListFilter<"Headphone">
    exchangePossible?: EnumExchangePossibleFilter<"Headphone"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"Headphone"> | $Enums.OpenToNegotiation
    description?: StringFilter<"Headphone"> | string
    price?: StringFilter<"Headphone"> | string
    phoneNumber?: StringFilter<"Headphone"> | string
    createdAt?: DateTimeFilter<"Headphone"> | Date | string
    updatedAt?: DateTimeFilter<"Headphone"> | Date | string
    createdById?: StringFilter<"Headphone"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HeadphoneOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    formFactor?: SortOrder
    connectivity?: SortOrder
    resistance?: SortOrderInput | SortOrder
    color?: SortOrder
    condition?: SortOrder
    features?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: HeadphoneCountOrderByAggregateInput
    _max?: HeadphoneMaxOrderByAggregateInput
    _min?: HeadphoneMinOrderByAggregateInput
  }

  export type HeadphoneScalarWhereWithAggregatesInput = {
    AND?: HeadphoneScalarWhereWithAggregatesInput | HeadphoneScalarWhereWithAggregatesInput[]
    OR?: HeadphoneScalarWhereWithAggregatesInput[]
    NOT?: HeadphoneScalarWhereWithAggregatesInput | HeadphoneScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Headphone"> | string
    title?: StringWithAggregatesFilter<"Headphone"> | string
    category?: StringWithAggregatesFilter<"Headphone"> | string
    subcategory?: StringWithAggregatesFilter<"Headphone"> | string
    location?: EnumKenyanCountyWithAggregatesFilter<"Headphone"> | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandWithAggregatesFilter<"Headphone"> | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeWithAggregatesFilter<"Headphone"> | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorWithAggregatesFilter<"Headphone"> | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityWithAggregatesFilter<"Headphone"> | $Enums.HeadphoneConnectivity
    resistance?: StringNullableWithAggregatesFilter<"Headphone"> | string | null
    color?: StringWithAggregatesFilter<"Headphone"> | string
    condition?: EnumConditionWithAggregatesFilter<"Headphone"> | $Enums.Condition
    features?: EnumHeadphoneFeatureNullableListFilter<"Headphone">
    exchangePossible?: EnumExchangePossibleWithAggregatesFilter<"Headphone"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationWithAggregatesFilter<"Headphone"> | $Enums.OpenToNegotiation
    description?: StringWithAggregatesFilter<"Headphone"> | string
    price?: StringWithAggregatesFilter<"Headphone"> | string
    phoneNumber?: StringWithAggregatesFilter<"Headphone"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Headphone"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Headphone"> | Date | string
    createdById?: StringWithAggregatesFilter<"Headphone"> | string
  }

  export type BagWhereInput = {
    AND?: BagWhereInput | BagWhereInput[]
    OR?: BagWhereInput[]
    NOT?: BagWhereInput | BagWhereInput[]
    id?: StringFilter<"Bag"> | string
    title?: StringFilter<"Bag"> | string
    category?: StringFilter<"Bag"> | string
    subcategory?: StringFilter<"Bag"> | string
    location?: EnumKenyanCountyFilter<"Bag"> | $Enums.KenyanCounty
    brand?: EnumBagBrandFilter<"Bag"> | $Enums.BagBrand
    gender?: EnumBagGenderFilter<"Bag"> | $Enums.BagGender
    type?: EnumBagTypeFilter<"Bag"> | $Enums.BagType
    color?: StringFilter<"Bag"> | string
    condition?: EnumConditionFilter<"Bag"> | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFilter<"Bag"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"Bag"> | $Enums.OpenToNegotiation
    description?: StringFilter<"Bag"> | string
    price?: StringFilter<"Bag"> | string
    phoneNumber?: StringFilter<"Bag"> | string
    createdAt?: DateTimeFilter<"Bag"> | Date | string
    updatedAt?: DateTimeFilter<"Bag"> | Date | string
    createdById?: StringFilter<"Bag"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BagOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type BagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BagWhereInput | BagWhereInput[]
    OR?: BagWhereInput[]
    NOT?: BagWhereInput | BagWhereInput[]
    title?: StringFilter<"Bag"> | string
    category?: StringFilter<"Bag"> | string
    subcategory?: StringFilter<"Bag"> | string
    location?: EnumKenyanCountyFilter<"Bag"> | $Enums.KenyanCounty
    brand?: EnumBagBrandFilter<"Bag"> | $Enums.BagBrand
    gender?: EnumBagGenderFilter<"Bag"> | $Enums.BagGender
    type?: EnumBagTypeFilter<"Bag"> | $Enums.BagType
    color?: StringFilter<"Bag"> | string
    condition?: EnumConditionFilter<"Bag"> | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFilter<"Bag"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"Bag"> | $Enums.OpenToNegotiation
    description?: StringFilter<"Bag"> | string
    price?: StringFilter<"Bag"> | string
    phoneNumber?: StringFilter<"Bag"> | string
    createdAt?: DateTimeFilter<"Bag"> | Date | string
    updatedAt?: DateTimeFilter<"Bag"> | Date | string
    createdById?: StringFilter<"Bag"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BagOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: BagCountOrderByAggregateInput
    _max?: BagMaxOrderByAggregateInput
    _min?: BagMinOrderByAggregateInput
  }

  export type BagScalarWhereWithAggregatesInput = {
    AND?: BagScalarWhereWithAggregatesInput | BagScalarWhereWithAggregatesInput[]
    OR?: BagScalarWhereWithAggregatesInput[]
    NOT?: BagScalarWhereWithAggregatesInput | BagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bag"> | string
    title?: StringWithAggregatesFilter<"Bag"> | string
    category?: StringWithAggregatesFilter<"Bag"> | string
    subcategory?: StringWithAggregatesFilter<"Bag"> | string
    location?: EnumKenyanCountyWithAggregatesFilter<"Bag"> | $Enums.KenyanCounty
    brand?: EnumBagBrandWithAggregatesFilter<"Bag"> | $Enums.BagBrand
    gender?: EnumBagGenderWithAggregatesFilter<"Bag"> | $Enums.BagGender
    type?: EnumBagTypeWithAggregatesFilter<"Bag"> | $Enums.BagType
    color?: StringWithAggregatesFilter<"Bag"> | string
    condition?: EnumConditionWithAggregatesFilter<"Bag"> | $Enums.Condition
    exchangePossible?: EnumExchangePossibleWithAggregatesFilter<"Bag"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationWithAggregatesFilter<"Bag"> | $Enums.OpenToNegotiation
    description?: StringWithAggregatesFilter<"Bag"> | string
    price?: StringWithAggregatesFilter<"Bag"> | string
    phoneNumber?: StringWithAggregatesFilter<"Bag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bag"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bag"> | Date | string
    createdById?: StringWithAggregatesFilter<"Bag"> | string
  }

  export type ClothingWhereInput = {
    AND?: ClothingWhereInput | ClothingWhereInput[]
    OR?: ClothingWhereInput[]
    NOT?: ClothingWhereInput | ClothingWhereInput[]
    id?: StringFilter<"Clothing"> | string
    title?: StringFilter<"Clothing"> | string
    category?: StringFilter<"Clothing"> | string
    subcategory?: StringFilter<"Clothing"> | string
    location?: EnumKenyanCountyFilter<"Clothing"> | $Enums.KenyanCounty
    brand?: EnumClothingBrandFilter<"Clothing"> | $Enums.ClothingBrand
    type?: EnumClothingTypeFilter<"Clothing"> | $Enums.ClothingType
    gender?: EnumClothingGenderFilter<"Clothing"> | $Enums.ClothingGender
    color?: StringFilter<"Clothing"> | string
    condition?: EnumConditionFilter<"Clothing"> | $Enums.Condition
    madeInKenya?: BoolFilter<"Clothing"> | boolean
    hasWarranty?: BoolFilter<"Clothing"> | boolean
    warrantyPeriod?: StringNullableFilter<"Clothing"> | string | null
    exchangePossible?: EnumExchangePossibleFilter<"Clothing"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"Clothing"> | $Enums.OpenToNegotiation
    description?: StringFilter<"Clothing"> | string
    price?: StringFilter<"Clothing"> | string
    phoneNumber?: StringFilter<"Clothing"> | string
    createdAt?: DateTimeFilter<"Clothing"> | Date | string
    updatedAt?: DateTimeFilter<"Clothing"> | Date | string
    createdById?: StringFilter<"Clothing"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ClothingOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    madeInKenya?: SortOrder
    hasWarranty?: SortOrder
    warrantyPeriod?: SortOrderInput | SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    createdBy?: UserOrderByWithRelationInput
  }

  export type ClothingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClothingWhereInput | ClothingWhereInput[]
    OR?: ClothingWhereInput[]
    NOT?: ClothingWhereInput | ClothingWhereInput[]
    title?: StringFilter<"Clothing"> | string
    category?: StringFilter<"Clothing"> | string
    subcategory?: StringFilter<"Clothing"> | string
    location?: EnumKenyanCountyFilter<"Clothing"> | $Enums.KenyanCounty
    brand?: EnumClothingBrandFilter<"Clothing"> | $Enums.ClothingBrand
    type?: EnumClothingTypeFilter<"Clothing"> | $Enums.ClothingType
    gender?: EnumClothingGenderFilter<"Clothing"> | $Enums.ClothingGender
    color?: StringFilter<"Clothing"> | string
    condition?: EnumConditionFilter<"Clothing"> | $Enums.Condition
    madeInKenya?: BoolFilter<"Clothing"> | boolean
    hasWarranty?: BoolFilter<"Clothing"> | boolean
    warrantyPeriod?: StringNullableFilter<"Clothing"> | string | null
    exchangePossible?: EnumExchangePossibleFilter<"Clothing"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"Clothing"> | $Enums.OpenToNegotiation
    description?: StringFilter<"Clothing"> | string
    price?: StringFilter<"Clothing"> | string
    phoneNumber?: StringFilter<"Clothing"> | string
    createdAt?: DateTimeFilter<"Clothing"> | Date | string
    updatedAt?: DateTimeFilter<"Clothing"> | Date | string
    createdById?: StringFilter<"Clothing"> | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ClothingOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    madeInKenya?: SortOrder
    hasWarranty?: SortOrder
    warrantyPeriod?: SortOrderInput | SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
    _count?: ClothingCountOrderByAggregateInput
    _max?: ClothingMaxOrderByAggregateInput
    _min?: ClothingMinOrderByAggregateInput
  }

  export type ClothingScalarWhereWithAggregatesInput = {
    AND?: ClothingScalarWhereWithAggregatesInput | ClothingScalarWhereWithAggregatesInput[]
    OR?: ClothingScalarWhereWithAggregatesInput[]
    NOT?: ClothingScalarWhereWithAggregatesInput | ClothingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clothing"> | string
    title?: StringWithAggregatesFilter<"Clothing"> | string
    category?: StringWithAggregatesFilter<"Clothing"> | string
    subcategory?: StringWithAggregatesFilter<"Clothing"> | string
    location?: EnumKenyanCountyWithAggregatesFilter<"Clothing"> | $Enums.KenyanCounty
    brand?: EnumClothingBrandWithAggregatesFilter<"Clothing"> | $Enums.ClothingBrand
    type?: EnumClothingTypeWithAggregatesFilter<"Clothing"> | $Enums.ClothingType
    gender?: EnumClothingGenderWithAggregatesFilter<"Clothing"> | $Enums.ClothingGender
    color?: StringWithAggregatesFilter<"Clothing"> | string
    condition?: EnumConditionWithAggregatesFilter<"Clothing"> | $Enums.Condition
    madeInKenya?: BoolWithAggregatesFilter<"Clothing"> | boolean
    hasWarranty?: BoolWithAggregatesFilter<"Clothing"> | boolean
    warrantyPeriod?: StringNullableWithAggregatesFilter<"Clothing"> | string | null
    exchangePossible?: EnumExchangePossibleWithAggregatesFilter<"Clothing"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationWithAggregatesFilter<"Clothing"> | $Enums.OpenToNegotiation
    description?: StringWithAggregatesFilter<"Clothing"> | string
    price?: StringWithAggregatesFilter<"Clothing"> | string
    phoneNumber?: StringWithAggregatesFilter<"Clothing"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Clothing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Clothing"> | Date | string
    createdById?: StringWithAggregatesFilter<"Clothing"> | string
  }

  export type PostCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type PostCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneCreateNestedManyWithoutCreatedByInput
    bags?: BagCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerUncheckedCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneUncheckedCreateNestedManyWithoutCreatedByInput
    bags?: BagUncheckedCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUpdateManyWithoutCreatedByNestedInput
    bags?: BagUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUncheckedUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUncheckedUpdateManyWithoutCreatedByNestedInput
    bags?: BagUncheckedUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id: string
    accountId: string
    providerId: string
    userId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    identifier: string
    value: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopComputerCreateInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    type: $Enums.ComputerType
    brand: $Enums.LaptopBrand
    laptopSubtype?: $Enums.LaptopSubtype | null
    desktopSubtype?: $Enums.DesktopSubtype | null
    serverSubtype?: $Enums.ServerSubtype | null
    model?: string | null
    condition: $Enums.Condition
    processorType: string
    numberOfCores: number
    ram: string
    storageCapacity: string
    storageType: $Enums.StorageType
    displaySize?: string | null
    graphicsCard?: string | null
    graphicsCardMemory?: string | null
    operatingSystem: $Enums.OperatingSystem
    color: string
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutLaptopComputersInput
  }

  export type LaptopComputerUncheckedCreateInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    type: $Enums.ComputerType
    brand: $Enums.LaptopBrand
    laptopSubtype?: $Enums.LaptopSubtype | null
    desktopSubtype?: $Enums.DesktopSubtype | null
    serverSubtype?: $Enums.ServerSubtype | null
    model?: string | null
    condition: $Enums.Condition
    processorType: string
    numberOfCores: number
    ram: string
    storageCapacity: string
    storageType: $Enums.StorageType
    displaySize?: string | null
    graphicsCard?: string | null
    graphicsCardMemory?: string | null
    operatingSystem: $Enums.OperatingSystem
    color: string
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type LaptopComputerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    type?: EnumComputerTypeFieldUpdateOperationsInput | $Enums.ComputerType
    brand?: EnumLaptopBrandFieldUpdateOperationsInput | $Enums.LaptopBrand
    laptopSubtype?: NullableEnumLaptopSubtypeFieldUpdateOperationsInput | $Enums.LaptopSubtype | null
    desktopSubtype?: NullableEnumDesktopSubtypeFieldUpdateOperationsInput | $Enums.DesktopSubtype | null
    serverSubtype?: NullableEnumServerSubtypeFieldUpdateOperationsInput | $Enums.ServerSubtype | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    processorType?: StringFieldUpdateOperationsInput | string
    numberOfCores?: IntFieldUpdateOperationsInput | number
    ram?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCard?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCardMemory?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: EnumOperatingSystemFieldUpdateOperationsInput | $Enums.OperatingSystem
    color?: StringFieldUpdateOperationsInput | string
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutLaptopComputersNestedInput
  }

  export type LaptopComputerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    type?: EnumComputerTypeFieldUpdateOperationsInput | $Enums.ComputerType
    brand?: EnumLaptopBrandFieldUpdateOperationsInput | $Enums.LaptopBrand
    laptopSubtype?: NullableEnumLaptopSubtypeFieldUpdateOperationsInput | $Enums.LaptopSubtype | null
    desktopSubtype?: NullableEnumDesktopSubtypeFieldUpdateOperationsInput | $Enums.DesktopSubtype | null
    serverSubtype?: NullableEnumServerSubtypeFieldUpdateOperationsInput | $Enums.ServerSubtype | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    processorType?: StringFieldUpdateOperationsInput | string
    numberOfCores?: IntFieldUpdateOperationsInput | number
    ram?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCard?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCardMemory?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: EnumOperatingSystemFieldUpdateOperationsInput | $Enums.OperatingSystem
    color?: StringFieldUpdateOperationsInput | string
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type LaptopComputerCreateManyInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    type: $Enums.ComputerType
    brand: $Enums.LaptopBrand
    laptopSubtype?: $Enums.LaptopSubtype | null
    desktopSubtype?: $Enums.DesktopSubtype | null
    serverSubtype?: $Enums.ServerSubtype | null
    model?: string | null
    condition: $Enums.Condition
    processorType: string
    numberOfCores: number
    ram: string
    storageCapacity: string
    storageType: $Enums.StorageType
    displaySize?: string | null
    graphicsCard?: string | null
    graphicsCardMemory?: string | null
    operatingSystem: $Enums.OperatingSystem
    color: string
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type LaptopComputerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    type?: EnumComputerTypeFieldUpdateOperationsInput | $Enums.ComputerType
    brand?: EnumLaptopBrandFieldUpdateOperationsInput | $Enums.LaptopBrand
    laptopSubtype?: NullableEnumLaptopSubtypeFieldUpdateOperationsInput | $Enums.LaptopSubtype | null
    desktopSubtype?: NullableEnumDesktopSubtypeFieldUpdateOperationsInput | $Enums.DesktopSubtype | null
    serverSubtype?: NullableEnumServerSubtypeFieldUpdateOperationsInput | $Enums.ServerSubtype | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    processorType?: StringFieldUpdateOperationsInput | string
    numberOfCores?: IntFieldUpdateOperationsInput | number
    ram?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCard?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCardMemory?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: EnumOperatingSystemFieldUpdateOperationsInput | $Enums.OperatingSystem
    color?: StringFieldUpdateOperationsInput | string
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopComputerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    type?: EnumComputerTypeFieldUpdateOperationsInput | $Enums.ComputerType
    brand?: EnumLaptopBrandFieldUpdateOperationsInput | $Enums.LaptopBrand
    laptopSubtype?: NullableEnumLaptopSubtypeFieldUpdateOperationsInput | $Enums.LaptopSubtype | null
    desktopSubtype?: NullableEnumDesktopSubtypeFieldUpdateOperationsInput | $Enums.DesktopSubtype | null
    serverSubtype?: NullableEnumServerSubtypeFieldUpdateOperationsInput | $Enums.ServerSubtype | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    processorType?: StringFieldUpdateOperationsInput | string
    numberOfCores?: IntFieldUpdateOperationsInput | number
    ram?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCard?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCardMemory?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: EnumOperatingSystemFieldUpdateOperationsInput | $Enums.OperatingSystem
    color?: StringFieldUpdateOperationsInput | string
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type HeadphoneCreateInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.HeadphoneBrand
    type: $Enums.HeadphoneType
    formFactor: $Enums.HeadphoneFormFactor
    connectivity: $Enums.HeadphoneConnectivity
    resistance?: string | null
    color: string
    condition: $Enums.Condition
    features?: HeadphoneCreatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutHeadphonesInput
  }

  export type HeadphoneUncheckedCreateInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.HeadphoneBrand
    type: $Enums.HeadphoneType
    formFactor: $Enums.HeadphoneFormFactor
    connectivity: $Enums.HeadphoneConnectivity
    resistance?: string | null
    color: string
    condition: $Enums.Condition
    features?: HeadphoneCreatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type HeadphoneUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFieldUpdateOperationsInput | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFieldUpdateOperationsInput | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFieldUpdateOperationsInput | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFieldUpdateOperationsInput | $Enums.HeadphoneConnectivity
    resistance?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    features?: HeadphoneUpdatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutHeadphonesNestedInput
  }

  export type HeadphoneUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFieldUpdateOperationsInput | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFieldUpdateOperationsInput | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFieldUpdateOperationsInput | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFieldUpdateOperationsInput | $Enums.HeadphoneConnectivity
    resistance?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    features?: HeadphoneUpdatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type HeadphoneCreateManyInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.HeadphoneBrand
    type: $Enums.HeadphoneType
    formFactor: $Enums.HeadphoneFormFactor
    connectivity: $Enums.HeadphoneConnectivity
    resistance?: string | null
    color: string
    condition: $Enums.Condition
    features?: HeadphoneCreatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type HeadphoneUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFieldUpdateOperationsInput | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFieldUpdateOperationsInput | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFieldUpdateOperationsInput | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFieldUpdateOperationsInput | $Enums.HeadphoneConnectivity
    resistance?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    features?: HeadphoneUpdatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadphoneUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFieldUpdateOperationsInput | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFieldUpdateOperationsInput | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFieldUpdateOperationsInput | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFieldUpdateOperationsInput | $Enums.HeadphoneConnectivity
    resistance?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    features?: HeadphoneUpdatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type BagCreateInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.BagBrand
    gender: $Enums.BagGender
    type: $Enums.BagType
    color: string
    condition: $Enums.Condition
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutBagsInput
  }

  export type BagUncheckedCreateInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.BagBrand
    gender: $Enums.BagGender
    type: $Enums.BagType
    color: string
    condition: $Enums.Condition
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type BagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumBagBrandFieldUpdateOperationsInput | $Enums.BagBrand
    gender?: EnumBagGenderFieldUpdateOperationsInput | $Enums.BagGender
    type?: EnumBagTypeFieldUpdateOperationsInput | $Enums.BagType
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutBagsNestedInput
  }

  export type BagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumBagBrandFieldUpdateOperationsInput | $Enums.BagBrand
    gender?: EnumBagGenderFieldUpdateOperationsInput | $Enums.BagGender
    type?: EnumBagTypeFieldUpdateOperationsInput | $Enums.BagType
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type BagCreateManyInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.BagBrand
    gender: $Enums.BagGender
    type: $Enums.BagType
    color: string
    condition: $Enums.Condition
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type BagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumBagBrandFieldUpdateOperationsInput | $Enums.BagBrand
    gender?: EnumBagGenderFieldUpdateOperationsInput | $Enums.BagGender
    type?: EnumBagTypeFieldUpdateOperationsInput | $Enums.BagType
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumBagBrandFieldUpdateOperationsInput | $Enums.BagBrand
    gender?: EnumBagGenderFieldUpdateOperationsInput | $Enums.BagGender
    type?: EnumBagTypeFieldUpdateOperationsInput | $Enums.BagType
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type ClothingCreateInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.ClothingBrand
    type: $Enums.ClothingType
    gender: $Enums.ClothingGender
    color: string
    condition: $Enums.Condition
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: string | null
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutClothingInput
  }

  export type ClothingUncheckedCreateInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.ClothingBrand
    type: $Enums.ClothingType
    gender: $Enums.ClothingGender
    color: string
    condition: $Enums.Condition
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: string | null
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type ClothingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumClothingBrandFieldUpdateOperationsInput | $Enums.ClothingBrand
    type?: EnumClothingTypeFieldUpdateOperationsInput | $Enums.ClothingType
    gender?: EnumClothingGenderFieldUpdateOperationsInput | $Enums.ClothingGender
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    madeInKenya?: BoolFieldUpdateOperationsInput | boolean
    hasWarranty?: BoolFieldUpdateOperationsInput | boolean
    warrantyPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutClothingNestedInput
  }

  export type ClothingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumClothingBrandFieldUpdateOperationsInput | $Enums.ClothingBrand
    type?: EnumClothingTypeFieldUpdateOperationsInput | $Enums.ClothingType
    gender?: EnumClothingGenderFieldUpdateOperationsInput | $Enums.ClothingGender
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    madeInKenya?: BoolFieldUpdateOperationsInput | boolean
    hasWarranty?: BoolFieldUpdateOperationsInput | boolean
    warrantyPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type ClothingCreateManyInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.ClothingBrand
    type: $Enums.ClothingType
    gender: $Enums.ClothingGender
    color: string
    condition: $Enums.Condition
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: string | null
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdById: string
  }

  export type ClothingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumClothingBrandFieldUpdateOperationsInput | $Enums.ClothingBrand
    type?: EnumClothingTypeFieldUpdateOperationsInput | $Enums.ClothingType
    gender?: EnumClothingGenderFieldUpdateOperationsInput | $Enums.ClothingGender
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    madeInKenya?: BoolFieldUpdateOperationsInput | boolean
    hasWarranty?: BoolFieldUpdateOperationsInput | boolean
    warrantyPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumClothingBrandFieldUpdateOperationsInput | $Enums.ClothingBrand
    type?: EnumClothingTypeFieldUpdateOperationsInput | $Enums.ClothingType
    gender?: EnumClothingGenderFieldUpdateOperationsInput | $Enums.ClothingGender
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    madeInKenya?: BoolFieldUpdateOperationsInput | boolean
    hasWarranty?: BoolFieldUpdateOperationsInput | boolean
    warrantyPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type LaptopComputerListRelationFilter = {
    every?: LaptopComputerWhereInput
    some?: LaptopComputerWhereInput
    none?: LaptopComputerWhereInput
  }

  export type HeadphoneListRelationFilter = {
    every?: HeadphoneWhereInput
    some?: HeadphoneWhereInput
    none?: HeadphoneWhereInput
  }

  export type BagListRelationFilter = {
    every?: BagWhereInput
    some?: BagWhereInput
    none?: BagWhereInput
  }

  export type ClothingListRelationFilter = {
    every?: ClothingWhereInput
    some?: ClothingWhereInput
    none?: ClothingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LaptopComputerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeadphoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClothingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumKenyanCountyFilter<$PrismaModel = never> = {
    equals?: $Enums.KenyanCounty | EnumKenyanCountyFieldRefInput<$PrismaModel>
    in?: $Enums.KenyanCounty[] | ListEnumKenyanCountyFieldRefInput<$PrismaModel>
    notIn?: $Enums.KenyanCounty[] | ListEnumKenyanCountyFieldRefInput<$PrismaModel>
    not?: NestedEnumKenyanCountyFilter<$PrismaModel> | $Enums.KenyanCounty
  }

  export type EnumComputerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ComputerType | EnumComputerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ComputerType[] | ListEnumComputerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComputerType[] | ListEnumComputerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumComputerTypeFilter<$PrismaModel> | $Enums.ComputerType
  }

  export type EnumLaptopBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.LaptopBrand | EnumLaptopBrandFieldRefInput<$PrismaModel>
    in?: $Enums.LaptopBrand[] | ListEnumLaptopBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaptopBrand[] | ListEnumLaptopBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumLaptopBrandFilter<$PrismaModel> | $Enums.LaptopBrand
  }

  export type EnumLaptopSubtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LaptopSubtype | EnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LaptopSubtype[] | ListEnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LaptopSubtype[] | ListEnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLaptopSubtypeNullableFilter<$PrismaModel> | $Enums.LaptopSubtype | null
  }

  export type EnumDesktopSubtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DesktopSubtype | EnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DesktopSubtype[] | ListEnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DesktopSubtype[] | ListEnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDesktopSubtypeNullableFilter<$PrismaModel> | $Enums.DesktopSubtype | null
  }

  export type EnumServerSubtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServerSubtype | EnumServerSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServerSubtype[] | ListEnumServerSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServerSubtype[] | ListEnumServerSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServerSubtypeNullableFilter<$PrismaModel> | $Enums.ServerSubtype | null
  }

  export type EnumConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumConditionFilter<$PrismaModel> | $Enums.Condition
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumStorageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageTypeFilter<$PrismaModel> | $Enums.StorageType
  }

  export type EnumOperatingSystemFilter<$PrismaModel = never> = {
    equals?: $Enums.OperatingSystem | EnumOperatingSystemFieldRefInput<$PrismaModel>
    in?: $Enums.OperatingSystem[] | ListEnumOperatingSystemFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperatingSystem[] | ListEnumOperatingSystemFieldRefInput<$PrismaModel>
    not?: NestedEnumOperatingSystemFilter<$PrismaModel> | $Enums.OperatingSystem
  }

  export type EnumExchangePossibleFilter<$PrismaModel = never> = {
    equals?: $Enums.ExchangePossible | EnumExchangePossibleFieldRefInput<$PrismaModel>
    in?: $Enums.ExchangePossible[] | ListEnumExchangePossibleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExchangePossible[] | ListEnumExchangePossibleFieldRefInput<$PrismaModel>
    not?: NestedEnumExchangePossibleFilter<$PrismaModel> | $Enums.ExchangePossible
  }

  export type EnumOpenToNegotiationFilter<$PrismaModel = never> = {
    equals?: $Enums.OpenToNegotiation | EnumOpenToNegotiationFieldRefInput<$PrismaModel>
    in?: $Enums.OpenToNegotiation[] | ListEnumOpenToNegotiationFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpenToNegotiation[] | ListEnumOpenToNegotiationFieldRefInput<$PrismaModel>
    not?: NestedEnumOpenToNegotiationFilter<$PrismaModel> | $Enums.OpenToNegotiation
  }

  export type LaptopComputerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    laptopSubtype?: SortOrder
    desktopSubtype?: SortOrder
    serverSubtype?: SortOrder
    model?: SortOrder
    condition?: SortOrder
    processorType?: SortOrder
    numberOfCores?: SortOrder
    ram?: SortOrder
    storageCapacity?: SortOrder
    storageType?: SortOrder
    displaySize?: SortOrder
    graphicsCard?: SortOrder
    graphicsCardMemory?: SortOrder
    operatingSystem?: SortOrder
    color?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type LaptopComputerAvgOrderByAggregateInput = {
    numberOfCores?: SortOrder
  }

  export type LaptopComputerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    laptopSubtype?: SortOrder
    desktopSubtype?: SortOrder
    serverSubtype?: SortOrder
    model?: SortOrder
    condition?: SortOrder
    processorType?: SortOrder
    numberOfCores?: SortOrder
    ram?: SortOrder
    storageCapacity?: SortOrder
    storageType?: SortOrder
    displaySize?: SortOrder
    graphicsCard?: SortOrder
    graphicsCardMemory?: SortOrder
    operatingSystem?: SortOrder
    color?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type LaptopComputerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    type?: SortOrder
    brand?: SortOrder
    laptopSubtype?: SortOrder
    desktopSubtype?: SortOrder
    serverSubtype?: SortOrder
    model?: SortOrder
    condition?: SortOrder
    processorType?: SortOrder
    numberOfCores?: SortOrder
    ram?: SortOrder
    storageCapacity?: SortOrder
    storageType?: SortOrder
    displaySize?: SortOrder
    graphicsCard?: SortOrder
    graphicsCardMemory?: SortOrder
    operatingSystem?: SortOrder
    color?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type LaptopComputerSumOrderByAggregateInput = {
    numberOfCores?: SortOrder
  }

  export type EnumKenyanCountyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KenyanCounty | EnumKenyanCountyFieldRefInput<$PrismaModel>
    in?: $Enums.KenyanCounty[] | ListEnumKenyanCountyFieldRefInput<$PrismaModel>
    notIn?: $Enums.KenyanCounty[] | ListEnumKenyanCountyFieldRefInput<$PrismaModel>
    not?: NestedEnumKenyanCountyWithAggregatesFilter<$PrismaModel> | $Enums.KenyanCounty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKenyanCountyFilter<$PrismaModel>
    _max?: NestedEnumKenyanCountyFilter<$PrismaModel>
  }

  export type EnumComputerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComputerType | EnumComputerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ComputerType[] | ListEnumComputerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComputerType[] | ListEnumComputerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumComputerTypeWithAggregatesFilter<$PrismaModel> | $Enums.ComputerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComputerTypeFilter<$PrismaModel>
    _max?: NestedEnumComputerTypeFilter<$PrismaModel>
  }

  export type EnumLaptopBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LaptopBrand | EnumLaptopBrandFieldRefInput<$PrismaModel>
    in?: $Enums.LaptopBrand[] | ListEnumLaptopBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaptopBrand[] | ListEnumLaptopBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumLaptopBrandWithAggregatesFilter<$PrismaModel> | $Enums.LaptopBrand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLaptopBrandFilter<$PrismaModel>
    _max?: NestedEnumLaptopBrandFilter<$PrismaModel>
  }

  export type EnumLaptopSubtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LaptopSubtype | EnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LaptopSubtype[] | ListEnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LaptopSubtype[] | ListEnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLaptopSubtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LaptopSubtype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLaptopSubtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumLaptopSubtypeNullableFilter<$PrismaModel>
  }

  export type EnumDesktopSubtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesktopSubtype | EnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DesktopSubtype[] | ListEnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DesktopSubtype[] | ListEnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDesktopSubtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DesktopSubtype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDesktopSubtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDesktopSubtypeNullableFilter<$PrismaModel>
  }

  export type EnumServerSubtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServerSubtype | EnumServerSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServerSubtype[] | ListEnumServerSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServerSubtype[] | ListEnumServerSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServerSubtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServerSubtype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServerSubtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumServerSubtypeNullableFilter<$PrismaModel>
  }

  export type EnumConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumConditionWithAggregatesFilter<$PrismaModel> | $Enums.Condition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConditionFilter<$PrismaModel>
    _max?: NestedEnumConditionFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumStorageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageTypeWithAggregatesFilter<$PrismaModel> | $Enums.StorageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageTypeFilter<$PrismaModel>
    _max?: NestedEnumStorageTypeFilter<$PrismaModel>
  }

  export type EnumOperatingSystemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperatingSystem | EnumOperatingSystemFieldRefInput<$PrismaModel>
    in?: $Enums.OperatingSystem[] | ListEnumOperatingSystemFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperatingSystem[] | ListEnumOperatingSystemFieldRefInput<$PrismaModel>
    not?: NestedEnumOperatingSystemWithAggregatesFilter<$PrismaModel> | $Enums.OperatingSystem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperatingSystemFilter<$PrismaModel>
    _max?: NestedEnumOperatingSystemFilter<$PrismaModel>
  }

  export type EnumExchangePossibleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExchangePossible | EnumExchangePossibleFieldRefInput<$PrismaModel>
    in?: $Enums.ExchangePossible[] | ListEnumExchangePossibleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExchangePossible[] | ListEnumExchangePossibleFieldRefInput<$PrismaModel>
    not?: NestedEnumExchangePossibleWithAggregatesFilter<$PrismaModel> | $Enums.ExchangePossible
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExchangePossibleFilter<$PrismaModel>
    _max?: NestedEnumExchangePossibleFilter<$PrismaModel>
  }

  export type EnumOpenToNegotiationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpenToNegotiation | EnumOpenToNegotiationFieldRefInput<$PrismaModel>
    in?: $Enums.OpenToNegotiation[] | ListEnumOpenToNegotiationFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpenToNegotiation[] | ListEnumOpenToNegotiationFieldRefInput<$PrismaModel>
    not?: NestedEnumOpenToNegotiationWithAggregatesFilter<$PrismaModel> | $Enums.OpenToNegotiation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpenToNegotiationFilter<$PrismaModel>
    _max?: NestedEnumOpenToNegotiationFilter<$PrismaModel>
  }

  export type EnumHeadphoneBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneBrand | EnumHeadphoneBrandFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneBrand[] | ListEnumHeadphoneBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneBrand[] | ListEnumHeadphoneBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneBrandFilter<$PrismaModel> | $Enums.HeadphoneBrand
  }

  export type EnumHeadphoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneType | EnumHeadphoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneType[] | ListEnumHeadphoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneType[] | ListEnumHeadphoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneTypeFilter<$PrismaModel> | $Enums.HeadphoneType
  }

  export type EnumHeadphoneFormFactorFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneFormFactor | EnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneFormFactor[] | ListEnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneFormFactor[] | ListEnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneFormFactorFilter<$PrismaModel> | $Enums.HeadphoneFormFactor
  }

  export type EnumHeadphoneConnectivityFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneConnectivity | EnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneConnectivity[] | ListEnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneConnectivity[] | ListEnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneConnectivityFilter<$PrismaModel> | $Enums.HeadphoneConnectivity
  }

  export type EnumHeadphoneFeatureNullableListFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneFeature[] | ListEnumHeadphoneFeatureFieldRefInput<$PrismaModel> | null
    has?: $Enums.HeadphoneFeature | EnumHeadphoneFeatureFieldRefInput<$PrismaModel> | null
    hasEvery?: $Enums.HeadphoneFeature[] | ListEnumHeadphoneFeatureFieldRefInput<$PrismaModel>
    hasSome?: $Enums.HeadphoneFeature[] | ListEnumHeadphoneFeatureFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type HeadphoneCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    formFactor?: SortOrder
    connectivity?: SortOrder
    resistance?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    features?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type HeadphoneMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    formFactor?: SortOrder
    connectivity?: SortOrder
    resistance?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type HeadphoneMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    formFactor?: SortOrder
    connectivity?: SortOrder
    resistance?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EnumHeadphoneBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneBrand | EnumHeadphoneBrandFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneBrand[] | ListEnumHeadphoneBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneBrand[] | ListEnumHeadphoneBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneBrandWithAggregatesFilter<$PrismaModel> | $Enums.HeadphoneBrand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHeadphoneBrandFilter<$PrismaModel>
    _max?: NestedEnumHeadphoneBrandFilter<$PrismaModel>
  }

  export type EnumHeadphoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneType | EnumHeadphoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneType[] | ListEnumHeadphoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneType[] | ListEnumHeadphoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.HeadphoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHeadphoneTypeFilter<$PrismaModel>
    _max?: NestedEnumHeadphoneTypeFilter<$PrismaModel>
  }

  export type EnumHeadphoneFormFactorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneFormFactor | EnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneFormFactor[] | ListEnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneFormFactor[] | ListEnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneFormFactorWithAggregatesFilter<$PrismaModel> | $Enums.HeadphoneFormFactor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHeadphoneFormFactorFilter<$PrismaModel>
    _max?: NestedEnumHeadphoneFormFactorFilter<$PrismaModel>
  }

  export type EnumHeadphoneConnectivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneConnectivity | EnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneConnectivity[] | ListEnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneConnectivity[] | ListEnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneConnectivityWithAggregatesFilter<$PrismaModel> | $Enums.HeadphoneConnectivity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHeadphoneConnectivityFilter<$PrismaModel>
    _max?: NestedEnumHeadphoneConnectivityFilter<$PrismaModel>
  }

  export type EnumBagBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.BagBrand | EnumBagBrandFieldRefInput<$PrismaModel>
    in?: $Enums.BagBrand[] | ListEnumBagBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagBrand[] | ListEnumBagBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumBagBrandFilter<$PrismaModel> | $Enums.BagBrand
  }

  export type EnumBagGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.BagGender | EnumBagGenderFieldRefInput<$PrismaModel>
    in?: $Enums.BagGender[] | ListEnumBagGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagGender[] | ListEnumBagGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumBagGenderFilter<$PrismaModel> | $Enums.BagGender
  }

  export type EnumBagTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BagType | EnumBagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BagType[] | ListEnumBagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagType[] | ListEnumBagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBagTypeFilter<$PrismaModel> | $Enums.BagType
  }

  export type BagCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type BagMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type BagMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    gender?: SortOrder
    type?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EnumBagBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BagBrand | EnumBagBrandFieldRefInput<$PrismaModel>
    in?: $Enums.BagBrand[] | ListEnumBagBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagBrand[] | ListEnumBagBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumBagBrandWithAggregatesFilter<$PrismaModel> | $Enums.BagBrand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBagBrandFilter<$PrismaModel>
    _max?: NestedEnumBagBrandFilter<$PrismaModel>
  }

  export type EnumBagGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BagGender | EnumBagGenderFieldRefInput<$PrismaModel>
    in?: $Enums.BagGender[] | ListEnumBagGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagGender[] | ListEnumBagGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumBagGenderWithAggregatesFilter<$PrismaModel> | $Enums.BagGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBagGenderFilter<$PrismaModel>
    _max?: NestedEnumBagGenderFilter<$PrismaModel>
  }

  export type EnumBagTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BagType | EnumBagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BagType[] | ListEnumBagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagType[] | ListEnumBagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBagTypeWithAggregatesFilter<$PrismaModel> | $Enums.BagType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBagTypeFilter<$PrismaModel>
    _max?: NestedEnumBagTypeFilter<$PrismaModel>
  }

  export type EnumClothingBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingBrand | EnumClothingBrandFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingBrand[] | ListEnumClothingBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingBrand[] | ListEnumClothingBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingBrandFilter<$PrismaModel> | $Enums.ClothingBrand
  }

  export type EnumClothingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingType | EnumClothingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingType[] | ListEnumClothingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingType[] | ListEnumClothingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingTypeFilter<$PrismaModel> | $Enums.ClothingType
  }

  export type EnumClothingGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingGender | EnumClothingGenderFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingGender[] | ListEnumClothingGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingGender[] | ListEnumClothingGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingGenderFilter<$PrismaModel> | $Enums.ClothingGender
  }

  export type ClothingCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    madeInKenya?: SortOrder
    hasWarranty?: SortOrder
    warrantyPeriod?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type ClothingMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    madeInKenya?: SortOrder
    hasWarranty?: SortOrder
    warrantyPeriod?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type ClothingMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    subcategory?: SortOrder
    location?: SortOrder
    brand?: SortOrder
    type?: SortOrder
    gender?: SortOrder
    color?: SortOrder
    condition?: SortOrder
    madeInKenya?: SortOrder
    hasWarranty?: SortOrder
    warrantyPeriod?: SortOrder
    exchangePossible?: SortOrder
    openToNegotiation?: SortOrder
    description?: SortOrder
    price?: SortOrder
    phoneNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdById?: SortOrder
  }

  export type EnumClothingBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingBrand | EnumClothingBrandFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingBrand[] | ListEnumClothingBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingBrand[] | ListEnumClothingBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingBrandWithAggregatesFilter<$PrismaModel> | $Enums.ClothingBrand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClothingBrandFilter<$PrismaModel>
    _max?: NestedEnumClothingBrandFilter<$PrismaModel>
  }

  export type EnumClothingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingType | EnumClothingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingType[] | ListEnumClothingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingType[] | ListEnumClothingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClothingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClothingTypeFilter<$PrismaModel>
    _max?: NestedEnumClothingTypeFilter<$PrismaModel>
  }

  export type EnumClothingGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingGender | EnumClothingGenderFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingGender[] | ListEnumClothingGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingGender[] | ListEnumClothingGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingGenderWithAggregatesFilter<$PrismaModel> | $Enums.ClothingGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClothingGenderFilter<$PrismaModel>
    _max?: NestedEnumClothingGenderFilter<$PrismaModel>
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type LaptopComputerCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LaptopComputerCreateWithoutCreatedByInput, LaptopComputerUncheckedCreateWithoutCreatedByInput> | LaptopComputerCreateWithoutCreatedByInput[] | LaptopComputerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LaptopComputerCreateOrConnectWithoutCreatedByInput | LaptopComputerCreateOrConnectWithoutCreatedByInput[]
    createMany?: LaptopComputerCreateManyCreatedByInputEnvelope
    connect?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
  }

  export type HeadphoneCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<HeadphoneCreateWithoutCreatedByInput, HeadphoneUncheckedCreateWithoutCreatedByInput> | HeadphoneCreateWithoutCreatedByInput[] | HeadphoneUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: HeadphoneCreateOrConnectWithoutCreatedByInput | HeadphoneCreateOrConnectWithoutCreatedByInput[]
    createMany?: HeadphoneCreateManyCreatedByInputEnvelope
    connect?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
  }

  export type BagCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<BagCreateWithoutCreatedByInput, BagUncheckedCreateWithoutCreatedByInput> | BagCreateWithoutCreatedByInput[] | BagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BagCreateOrConnectWithoutCreatedByInput | BagCreateOrConnectWithoutCreatedByInput[]
    createMany?: BagCreateManyCreatedByInputEnvelope
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
  }

  export type ClothingCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClothingCreateWithoutCreatedByInput, ClothingUncheckedCreateWithoutCreatedByInput> | ClothingCreateWithoutCreatedByInput[] | ClothingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClothingCreateOrConnectWithoutCreatedByInput | ClothingCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClothingCreateManyCreatedByInputEnvelope
    connect?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type LaptopComputerUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LaptopComputerCreateWithoutCreatedByInput, LaptopComputerUncheckedCreateWithoutCreatedByInput> | LaptopComputerCreateWithoutCreatedByInput[] | LaptopComputerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LaptopComputerCreateOrConnectWithoutCreatedByInput | LaptopComputerCreateOrConnectWithoutCreatedByInput[]
    createMany?: LaptopComputerCreateManyCreatedByInputEnvelope
    connect?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
  }

  export type HeadphoneUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<HeadphoneCreateWithoutCreatedByInput, HeadphoneUncheckedCreateWithoutCreatedByInput> | HeadphoneCreateWithoutCreatedByInput[] | HeadphoneUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: HeadphoneCreateOrConnectWithoutCreatedByInput | HeadphoneCreateOrConnectWithoutCreatedByInput[]
    createMany?: HeadphoneCreateManyCreatedByInputEnvelope
    connect?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
  }

  export type BagUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<BagCreateWithoutCreatedByInput, BagUncheckedCreateWithoutCreatedByInput> | BagCreateWithoutCreatedByInput[] | BagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BagCreateOrConnectWithoutCreatedByInput | BagCreateOrConnectWithoutCreatedByInput[]
    createMany?: BagCreateManyCreatedByInputEnvelope
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
  }

  export type ClothingUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ClothingCreateWithoutCreatedByInput, ClothingUncheckedCreateWithoutCreatedByInput> | ClothingCreateWithoutCreatedByInput[] | ClothingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClothingCreateOrConnectWithoutCreatedByInput | ClothingCreateOrConnectWithoutCreatedByInput[]
    createMany?: ClothingCreateManyCreatedByInputEnvelope
    connect?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type LaptopComputerUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LaptopComputerCreateWithoutCreatedByInput, LaptopComputerUncheckedCreateWithoutCreatedByInput> | LaptopComputerCreateWithoutCreatedByInput[] | LaptopComputerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LaptopComputerCreateOrConnectWithoutCreatedByInput | LaptopComputerCreateOrConnectWithoutCreatedByInput[]
    upsert?: LaptopComputerUpsertWithWhereUniqueWithoutCreatedByInput | LaptopComputerUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LaptopComputerCreateManyCreatedByInputEnvelope
    set?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
    disconnect?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
    delete?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
    connect?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
    update?: LaptopComputerUpdateWithWhereUniqueWithoutCreatedByInput | LaptopComputerUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LaptopComputerUpdateManyWithWhereWithoutCreatedByInput | LaptopComputerUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LaptopComputerScalarWhereInput | LaptopComputerScalarWhereInput[]
  }

  export type HeadphoneUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<HeadphoneCreateWithoutCreatedByInput, HeadphoneUncheckedCreateWithoutCreatedByInput> | HeadphoneCreateWithoutCreatedByInput[] | HeadphoneUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: HeadphoneCreateOrConnectWithoutCreatedByInput | HeadphoneCreateOrConnectWithoutCreatedByInput[]
    upsert?: HeadphoneUpsertWithWhereUniqueWithoutCreatedByInput | HeadphoneUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: HeadphoneCreateManyCreatedByInputEnvelope
    set?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
    disconnect?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
    delete?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
    connect?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
    update?: HeadphoneUpdateWithWhereUniqueWithoutCreatedByInput | HeadphoneUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: HeadphoneUpdateManyWithWhereWithoutCreatedByInput | HeadphoneUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: HeadphoneScalarWhereInput | HeadphoneScalarWhereInput[]
  }

  export type BagUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<BagCreateWithoutCreatedByInput, BagUncheckedCreateWithoutCreatedByInput> | BagCreateWithoutCreatedByInput[] | BagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BagCreateOrConnectWithoutCreatedByInput | BagCreateOrConnectWithoutCreatedByInput[]
    upsert?: BagUpsertWithWhereUniqueWithoutCreatedByInput | BagUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BagCreateManyCreatedByInputEnvelope
    set?: BagWhereUniqueInput | BagWhereUniqueInput[]
    disconnect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    delete?: BagWhereUniqueInput | BagWhereUniqueInput[]
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    update?: BagUpdateWithWhereUniqueWithoutCreatedByInput | BagUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: BagUpdateManyWithWhereWithoutCreatedByInput | BagUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BagScalarWhereInput | BagScalarWhereInput[]
  }

  export type ClothingUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClothingCreateWithoutCreatedByInput, ClothingUncheckedCreateWithoutCreatedByInput> | ClothingCreateWithoutCreatedByInput[] | ClothingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClothingCreateOrConnectWithoutCreatedByInput | ClothingCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClothingUpsertWithWhereUniqueWithoutCreatedByInput | ClothingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClothingCreateManyCreatedByInputEnvelope
    set?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
    disconnect?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
    delete?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
    connect?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
    update?: ClothingUpdateWithWhereUniqueWithoutCreatedByInput | ClothingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClothingUpdateManyWithWhereWithoutCreatedByInput | ClothingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClothingScalarWhereInput | ClothingScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput> | PostCreateWithoutCreatedByInput[] | PostUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PostCreateOrConnectWithoutCreatedByInput | PostCreateOrConnectWithoutCreatedByInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutCreatedByInput | PostUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PostCreateManyCreatedByInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutCreatedByInput | PostUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PostUpdateManyWithWhereWithoutCreatedByInput | PostUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type LaptopComputerUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LaptopComputerCreateWithoutCreatedByInput, LaptopComputerUncheckedCreateWithoutCreatedByInput> | LaptopComputerCreateWithoutCreatedByInput[] | LaptopComputerUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LaptopComputerCreateOrConnectWithoutCreatedByInput | LaptopComputerCreateOrConnectWithoutCreatedByInput[]
    upsert?: LaptopComputerUpsertWithWhereUniqueWithoutCreatedByInput | LaptopComputerUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LaptopComputerCreateManyCreatedByInputEnvelope
    set?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
    disconnect?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
    delete?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
    connect?: LaptopComputerWhereUniqueInput | LaptopComputerWhereUniqueInput[]
    update?: LaptopComputerUpdateWithWhereUniqueWithoutCreatedByInput | LaptopComputerUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LaptopComputerUpdateManyWithWhereWithoutCreatedByInput | LaptopComputerUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LaptopComputerScalarWhereInput | LaptopComputerScalarWhereInput[]
  }

  export type HeadphoneUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<HeadphoneCreateWithoutCreatedByInput, HeadphoneUncheckedCreateWithoutCreatedByInput> | HeadphoneCreateWithoutCreatedByInput[] | HeadphoneUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: HeadphoneCreateOrConnectWithoutCreatedByInput | HeadphoneCreateOrConnectWithoutCreatedByInput[]
    upsert?: HeadphoneUpsertWithWhereUniqueWithoutCreatedByInput | HeadphoneUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: HeadphoneCreateManyCreatedByInputEnvelope
    set?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
    disconnect?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
    delete?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
    connect?: HeadphoneWhereUniqueInput | HeadphoneWhereUniqueInput[]
    update?: HeadphoneUpdateWithWhereUniqueWithoutCreatedByInput | HeadphoneUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: HeadphoneUpdateManyWithWhereWithoutCreatedByInput | HeadphoneUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: HeadphoneScalarWhereInput | HeadphoneScalarWhereInput[]
  }

  export type BagUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<BagCreateWithoutCreatedByInput, BagUncheckedCreateWithoutCreatedByInput> | BagCreateWithoutCreatedByInput[] | BagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BagCreateOrConnectWithoutCreatedByInput | BagCreateOrConnectWithoutCreatedByInput[]
    upsert?: BagUpsertWithWhereUniqueWithoutCreatedByInput | BagUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BagCreateManyCreatedByInputEnvelope
    set?: BagWhereUniqueInput | BagWhereUniqueInput[]
    disconnect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    delete?: BagWhereUniqueInput | BagWhereUniqueInput[]
    connect?: BagWhereUniqueInput | BagWhereUniqueInput[]
    update?: BagUpdateWithWhereUniqueWithoutCreatedByInput | BagUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: BagUpdateManyWithWhereWithoutCreatedByInput | BagUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BagScalarWhereInput | BagScalarWhereInput[]
  }

  export type ClothingUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ClothingCreateWithoutCreatedByInput, ClothingUncheckedCreateWithoutCreatedByInput> | ClothingCreateWithoutCreatedByInput[] | ClothingUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ClothingCreateOrConnectWithoutCreatedByInput | ClothingCreateOrConnectWithoutCreatedByInput[]
    upsert?: ClothingUpsertWithWhereUniqueWithoutCreatedByInput | ClothingUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: ClothingCreateManyCreatedByInputEnvelope
    set?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
    disconnect?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
    delete?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
    connect?: ClothingWhereUniqueInput | ClothingWhereUniqueInput[]
    update?: ClothingUpdateWithWhereUniqueWithoutCreatedByInput | ClothingUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ClothingUpdateManyWithWhereWithoutCreatedByInput | ClothingUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ClothingScalarWhereInput | ClothingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutLaptopComputersInput = {
    create?: XOR<UserCreateWithoutLaptopComputersInput, UserUncheckedCreateWithoutLaptopComputersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaptopComputersInput
    connect?: UserWhereUniqueInput
  }

  export type EnumKenyanCountyFieldUpdateOperationsInput = {
    set?: $Enums.KenyanCounty
  }

  export type EnumComputerTypeFieldUpdateOperationsInput = {
    set?: $Enums.ComputerType
  }

  export type EnumLaptopBrandFieldUpdateOperationsInput = {
    set?: $Enums.LaptopBrand
  }

  export type NullableEnumLaptopSubtypeFieldUpdateOperationsInput = {
    set?: $Enums.LaptopSubtype | null
  }

  export type NullableEnumDesktopSubtypeFieldUpdateOperationsInput = {
    set?: $Enums.DesktopSubtype | null
  }

  export type NullableEnumServerSubtypeFieldUpdateOperationsInput = {
    set?: $Enums.ServerSubtype | null
  }

  export type EnumConditionFieldUpdateOperationsInput = {
    set?: $Enums.Condition
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStorageTypeFieldUpdateOperationsInput = {
    set?: $Enums.StorageType
  }

  export type EnumOperatingSystemFieldUpdateOperationsInput = {
    set?: $Enums.OperatingSystem
  }

  export type EnumExchangePossibleFieldUpdateOperationsInput = {
    set?: $Enums.ExchangePossible
  }

  export type EnumOpenToNegotiationFieldUpdateOperationsInput = {
    set?: $Enums.OpenToNegotiation
  }

  export type UserUpdateOneRequiredWithoutLaptopComputersNestedInput = {
    create?: XOR<UserCreateWithoutLaptopComputersInput, UserUncheckedCreateWithoutLaptopComputersInput>
    connectOrCreate?: UserCreateOrConnectWithoutLaptopComputersInput
    upsert?: UserUpsertWithoutLaptopComputersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLaptopComputersInput, UserUpdateWithoutLaptopComputersInput>, UserUncheckedUpdateWithoutLaptopComputersInput>
  }

  export type HeadphoneCreatefeaturesInput = {
    set: $Enums.HeadphoneFeature[]
  }

  export type UserCreateNestedOneWithoutHeadphonesInput = {
    create?: XOR<UserCreateWithoutHeadphonesInput, UserUncheckedCreateWithoutHeadphonesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHeadphonesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumHeadphoneBrandFieldUpdateOperationsInput = {
    set?: $Enums.HeadphoneBrand
  }

  export type EnumHeadphoneTypeFieldUpdateOperationsInput = {
    set?: $Enums.HeadphoneType
  }

  export type EnumHeadphoneFormFactorFieldUpdateOperationsInput = {
    set?: $Enums.HeadphoneFormFactor
  }

  export type EnumHeadphoneConnectivityFieldUpdateOperationsInput = {
    set?: $Enums.HeadphoneConnectivity
  }

  export type HeadphoneUpdatefeaturesInput = {
    set?: $Enums.HeadphoneFeature[]
    push?: $Enums.HeadphoneFeature | $Enums.HeadphoneFeature[]
  }

  export type UserUpdateOneRequiredWithoutHeadphonesNestedInput = {
    create?: XOR<UserCreateWithoutHeadphonesInput, UserUncheckedCreateWithoutHeadphonesInput>
    connectOrCreate?: UserCreateOrConnectWithoutHeadphonesInput
    upsert?: UserUpsertWithoutHeadphonesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHeadphonesInput, UserUpdateWithoutHeadphonesInput>, UserUncheckedUpdateWithoutHeadphonesInput>
  }

  export type UserCreateNestedOneWithoutBagsInput = {
    create?: XOR<UserCreateWithoutBagsInput, UserUncheckedCreateWithoutBagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBagsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumBagBrandFieldUpdateOperationsInput = {
    set?: $Enums.BagBrand
  }

  export type EnumBagGenderFieldUpdateOperationsInput = {
    set?: $Enums.BagGender
  }

  export type EnumBagTypeFieldUpdateOperationsInput = {
    set?: $Enums.BagType
  }

  export type UserUpdateOneRequiredWithoutBagsNestedInput = {
    create?: XOR<UserCreateWithoutBagsInput, UserUncheckedCreateWithoutBagsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBagsInput
    upsert?: UserUpsertWithoutBagsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBagsInput, UserUpdateWithoutBagsInput>, UserUncheckedUpdateWithoutBagsInput>
  }

  export type UserCreateNestedOneWithoutClothingInput = {
    create?: XOR<UserCreateWithoutClothingInput, UserUncheckedCreateWithoutClothingInput>
    connectOrCreate?: UserCreateOrConnectWithoutClothingInput
    connect?: UserWhereUniqueInput
  }

  export type EnumClothingBrandFieldUpdateOperationsInput = {
    set?: $Enums.ClothingBrand
  }

  export type EnumClothingTypeFieldUpdateOperationsInput = {
    set?: $Enums.ClothingType
  }

  export type EnumClothingGenderFieldUpdateOperationsInput = {
    set?: $Enums.ClothingGender
  }

  export type UserUpdateOneRequiredWithoutClothingNestedInput = {
    create?: XOR<UserCreateWithoutClothingInput, UserUncheckedCreateWithoutClothingInput>
    connectOrCreate?: UserCreateOrConnectWithoutClothingInput
    upsert?: UserUpsertWithoutClothingInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClothingInput, UserUpdateWithoutClothingInput>, UserUncheckedUpdateWithoutClothingInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumKenyanCountyFilter<$PrismaModel = never> = {
    equals?: $Enums.KenyanCounty | EnumKenyanCountyFieldRefInput<$PrismaModel>
    in?: $Enums.KenyanCounty[] | ListEnumKenyanCountyFieldRefInput<$PrismaModel>
    notIn?: $Enums.KenyanCounty[] | ListEnumKenyanCountyFieldRefInput<$PrismaModel>
    not?: NestedEnumKenyanCountyFilter<$PrismaModel> | $Enums.KenyanCounty
  }

  export type NestedEnumComputerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ComputerType | EnumComputerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ComputerType[] | ListEnumComputerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComputerType[] | ListEnumComputerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumComputerTypeFilter<$PrismaModel> | $Enums.ComputerType
  }

  export type NestedEnumLaptopBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.LaptopBrand | EnumLaptopBrandFieldRefInput<$PrismaModel>
    in?: $Enums.LaptopBrand[] | ListEnumLaptopBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaptopBrand[] | ListEnumLaptopBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumLaptopBrandFilter<$PrismaModel> | $Enums.LaptopBrand
  }

  export type NestedEnumLaptopSubtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.LaptopSubtype | EnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LaptopSubtype[] | ListEnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LaptopSubtype[] | ListEnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLaptopSubtypeNullableFilter<$PrismaModel> | $Enums.LaptopSubtype | null
  }

  export type NestedEnumDesktopSubtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.DesktopSubtype | EnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DesktopSubtype[] | ListEnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DesktopSubtype[] | ListEnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDesktopSubtypeNullableFilter<$PrismaModel> | $Enums.DesktopSubtype | null
  }

  export type NestedEnumServerSubtypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.ServerSubtype | EnumServerSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServerSubtype[] | ListEnumServerSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServerSubtype[] | ListEnumServerSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServerSubtypeNullableFilter<$PrismaModel> | $Enums.ServerSubtype | null
  }

  export type NestedEnumConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumConditionFilter<$PrismaModel> | $Enums.Condition
  }

  export type NestedEnumStorageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageTypeFilter<$PrismaModel> | $Enums.StorageType
  }

  export type NestedEnumOperatingSystemFilter<$PrismaModel = never> = {
    equals?: $Enums.OperatingSystem | EnumOperatingSystemFieldRefInput<$PrismaModel>
    in?: $Enums.OperatingSystem[] | ListEnumOperatingSystemFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperatingSystem[] | ListEnumOperatingSystemFieldRefInput<$PrismaModel>
    not?: NestedEnumOperatingSystemFilter<$PrismaModel> | $Enums.OperatingSystem
  }

  export type NestedEnumExchangePossibleFilter<$PrismaModel = never> = {
    equals?: $Enums.ExchangePossible | EnumExchangePossibleFieldRefInput<$PrismaModel>
    in?: $Enums.ExchangePossible[] | ListEnumExchangePossibleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExchangePossible[] | ListEnumExchangePossibleFieldRefInput<$PrismaModel>
    not?: NestedEnumExchangePossibleFilter<$PrismaModel> | $Enums.ExchangePossible
  }

  export type NestedEnumOpenToNegotiationFilter<$PrismaModel = never> = {
    equals?: $Enums.OpenToNegotiation | EnumOpenToNegotiationFieldRefInput<$PrismaModel>
    in?: $Enums.OpenToNegotiation[] | ListEnumOpenToNegotiationFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpenToNegotiation[] | ListEnumOpenToNegotiationFieldRefInput<$PrismaModel>
    not?: NestedEnumOpenToNegotiationFilter<$PrismaModel> | $Enums.OpenToNegotiation
  }

  export type NestedEnumKenyanCountyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KenyanCounty | EnumKenyanCountyFieldRefInput<$PrismaModel>
    in?: $Enums.KenyanCounty[] | ListEnumKenyanCountyFieldRefInput<$PrismaModel>
    notIn?: $Enums.KenyanCounty[] | ListEnumKenyanCountyFieldRefInput<$PrismaModel>
    not?: NestedEnumKenyanCountyWithAggregatesFilter<$PrismaModel> | $Enums.KenyanCounty
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKenyanCountyFilter<$PrismaModel>
    _max?: NestedEnumKenyanCountyFilter<$PrismaModel>
  }

  export type NestedEnumComputerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComputerType | EnumComputerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ComputerType[] | ListEnumComputerTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComputerType[] | ListEnumComputerTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumComputerTypeWithAggregatesFilter<$PrismaModel> | $Enums.ComputerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComputerTypeFilter<$PrismaModel>
    _max?: NestedEnumComputerTypeFilter<$PrismaModel>
  }

  export type NestedEnumLaptopBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LaptopBrand | EnumLaptopBrandFieldRefInput<$PrismaModel>
    in?: $Enums.LaptopBrand[] | ListEnumLaptopBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.LaptopBrand[] | ListEnumLaptopBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumLaptopBrandWithAggregatesFilter<$PrismaModel> | $Enums.LaptopBrand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLaptopBrandFilter<$PrismaModel>
    _max?: NestedEnumLaptopBrandFilter<$PrismaModel>
  }

  export type NestedEnumLaptopSubtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LaptopSubtype | EnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.LaptopSubtype[] | ListEnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.LaptopSubtype[] | ListEnumLaptopSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumLaptopSubtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.LaptopSubtype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumLaptopSubtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumLaptopSubtypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDesktopSubtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DesktopSubtype | EnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.DesktopSubtype[] | ListEnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.DesktopSubtype[] | ListEnumDesktopSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumDesktopSubtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.DesktopSubtype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumDesktopSubtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumDesktopSubtypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumServerSubtypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ServerSubtype | EnumServerSubtypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.ServerSubtype[] | ListEnumServerSubtypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.ServerSubtype[] | ListEnumServerSubtypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumServerSubtypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.ServerSubtype | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumServerSubtypeNullableFilter<$PrismaModel>
    _max?: NestedEnumServerSubtypeNullableFilter<$PrismaModel>
  }

  export type NestedEnumConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Condition | EnumConditionFieldRefInput<$PrismaModel>
    in?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Condition[] | ListEnumConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumConditionWithAggregatesFilter<$PrismaModel> | $Enums.Condition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConditionFilter<$PrismaModel>
    _max?: NestedEnumConditionFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumStorageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StorageType | EnumStorageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StorageType[] | ListEnumStorageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumStorageTypeWithAggregatesFilter<$PrismaModel> | $Enums.StorageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStorageTypeFilter<$PrismaModel>
    _max?: NestedEnumStorageTypeFilter<$PrismaModel>
  }

  export type NestedEnumOperatingSystemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OperatingSystem | EnumOperatingSystemFieldRefInput<$PrismaModel>
    in?: $Enums.OperatingSystem[] | ListEnumOperatingSystemFieldRefInput<$PrismaModel>
    notIn?: $Enums.OperatingSystem[] | ListEnumOperatingSystemFieldRefInput<$PrismaModel>
    not?: NestedEnumOperatingSystemWithAggregatesFilter<$PrismaModel> | $Enums.OperatingSystem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOperatingSystemFilter<$PrismaModel>
    _max?: NestedEnumOperatingSystemFilter<$PrismaModel>
  }

  export type NestedEnumExchangePossibleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExchangePossible | EnumExchangePossibleFieldRefInput<$PrismaModel>
    in?: $Enums.ExchangePossible[] | ListEnumExchangePossibleFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExchangePossible[] | ListEnumExchangePossibleFieldRefInput<$PrismaModel>
    not?: NestedEnumExchangePossibleWithAggregatesFilter<$PrismaModel> | $Enums.ExchangePossible
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExchangePossibleFilter<$PrismaModel>
    _max?: NestedEnumExchangePossibleFilter<$PrismaModel>
  }

  export type NestedEnumOpenToNegotiationWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpenToNegotiation | EnumOpenToNegotiationFieldRefInput<$PrismaModel>
    in?: $Enums.OpenToNegotiation[] | ListEnumOpenToNegotiationFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpenToNegotiation[] | ListEnumOpenToNegotiationFieldRefInput<$PrismaModel>
    not?: NestedEnumOpenToNegotiationWithAggregatesFilter<$PrismaModel> | $Enums.OpenToNegotiation
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpenToNegotiationFilter<$PrismaModel>
    _max?: NestedEnumOpenToNegotiationFilter<$PrismaModel>
  }

  export type NestedEnumHeadphoneBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneBrand | EnumHeadphoneBrandFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneBrand[] | ListEnumHeadphoneBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneBrand[] | ListEnumHeadphoneBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneBrandFilter<$PrismaModel> | $Enums.HeadphoneBrand
  }

  export type NestedEnumHeadphoneTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneType | EnumHeadphoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneType[] | ListEnumHeadphoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneType[] | ListEnumHeadphoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneTypeFilter<$PrismaModel> | $Enums.HeadphoneType
  }

  export type NestedEnumHeadphoneFormFactorFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneFormFactor | EnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneFormFactor[] | ListEnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneFormFactor[] | ListEnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneFormFactorFilter<$PrismaModel> | $Enums.HeadphoneFormFactor
  }

  export type NestedEnumHeadphoneConnectivityFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneConnectivity | EnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneConnectivity[] | ListEnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneConnectivity[] | ListEnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneConnectivityFilter<$PrismaModel> | $Enums.HeadphoneConnectivity
  }

  export type NestedEnumHeadphoneBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneBrand | EnumHeadphoneBrandFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneBrand[] | ListEnumHeadphoneBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneBrand[] | ListEnumHeadphoneBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneBrandWithAggregatesFilter<$PrismaModel> | $Enums.HeadphoneBrand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHeadphoneBrandFilter<$PrismaModel>
    _max?: NestedEnumHeadphoneBrandFilter<$PrismaModel>
  }

  export type NestedEnumHeadphoneTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneType | EnumHeadphoneTypeFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneType[] | ListEnumHeadphoneTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneType[] | ListEnumHeadphoneTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneTypeWithAggregatesFilter<$PrismaModel> | $Enums.HeadphoneType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHeadphoneTypeFilter<$PrismaModel>
    _max?: NestedEnumHeadphoneTypeFilter<$PrismaModel>
  }

  export type NestedEnumHeadphoneFormFactorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneFormFactor | EnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneFormFactor[] | ListEnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneFormFactor[] | ListEnumHeadphoneFormFactorFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneFormFactorWithAggregatesFilter<$PrismaModel> | $Enums.HeadphoneFormFactor
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHeadphoneFormFactorFilter<$PrismaModel>
    _max?: NestedEnumHeadphoneFormFactorFilter<$PrismaModel>
  }

  export type NestedEnumHeadphoneConnectivityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HeadphoneConnectivity | EnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    in?: $Enums.HeadphoneConnectivity[] | ListEnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    notIn?: $Enums.HeadphoneConnectivity[] | ListEnumHeadphoneConnectivityFieldRefInput<$PrismaModel>
    not?: NestedEnumHeadphoneConnectivityWithAggregatesFilter<$PrismaModel> | $Enums.HeadphoneConnectivity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHeadphoneConnectivityFilter<$PrismaModel>
    _max?: NestedEnumHeadphoneConnectivityFilter<$PrismaModel>
  }

  export type NestedEnumBagBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.BagBrand | EnumBagBrandFieldRefInput<$PrismaModel>
    in?: $Enums.BagBrand[] | ListEnumBagBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagBrand[] | ListEnumBagBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumBagBrandFilter<$PrismaModel> | $Enums.BagBrand
  }

  export type NestedEnumBagGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.BagGender | EnumBagGenderFieldRefInput<$PrismaModel>
    in?: $Enums.BagGender[] | ListEnumBagGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagGender[] | ListEnumBagGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumBagGenderFilter<$PrismaModel> | $Enums.BagGender
  }

  export type NestedEnumBagTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BagType | EnumBagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BagType[] | ListEnumBagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagType[] | ListEnumBagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBagTypeFilter<$PrismaModel> | $Enums.BagType
  }

  export type NestedEnumBagBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BagBrand | EnumBagBrandFieldRefInput<$PrismaModel>
    in?: $Enums.BagBrand[] | ListEnumBagBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagBrand[] | ListEnumBagBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumBagBrandWithAggregatesFilter<$PrismaModel> | $Enums.BagBrand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBagBrandFilter<$PrismaModel>
    _max?: NestedEnumBagBrandFilter<$PrismaModel>
  }

  export type NestedEnumBagGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BagGender | EnumBagGenderFieldRefInput<$PrismaModel>
    in?: $Enums.BagGender[] | ListEnumBagGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagGender[] | ListEnumBagGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumBagGenderWithAggregatesFilter<$PrismaModel> | $Enums.BagGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBagGenderFilter<$PrismaModel>
    _max?: NestedEnumBagGenderFilter<$PrismaModel>
  }

  export type NestedEnumBagTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BagType | EnumBagTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BagType[] | ListEnumBagTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BagType[] | ListEnumBagTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBagTypeWithAggregatesFilter<$PrismaModel> | $Enums.BagType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBagTypeFilter<$PrismaModel>
    _max?: NestedEnumBagTypeFilter<$PrismaModel>
  }

  export type NestedEnumClothingBrandFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingBrand | EnumClothingBrandFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingBrand[] | ListEnumClothingBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingBrand[] | ListEnumClothingBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingBrandFilter<$PrismaModel> | $Enums.ClothingBrand
  }

  export type NestedEnumClothingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingType | EnumClothingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingType[] | ListEnumClothingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingType[] | ListEnumClothingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingTypeFilter<$PrismaModel> | $Enums.ClothingType
  }

  export type NestedEnumClothingGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingGender | EnumClothingGenderFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingGender[] | ListEnumClothingGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingGender[] | ListEnumClothingGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingGenderFilter<$PrismaModel> | $Enums.ClothingGender
  }

  export type NestedEnumClothingBrandWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingBrand | EnumClothingBrandFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingBrand[] | ListEnumClothingBrandFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingBrand[] | ListEnumClothingBrandFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingBrandWithAggregatesFilter<$PrismaModel> | $Enums.ClothingBrand
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClothingBrandFilter<$PrismaModel>
    _max?: NestedEnumClothingBrandFilter<$PrismaModel>
  }

  export type NestedEnumClothingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingType | EnumClothingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingType[] | ListEnumClothingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingType[] | ListEnumClothingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingTypeWithAggregatesFilter<$PrismaModel> | $Enums.ClothingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClothingTypeFilter<$PrismaModel>
    _max?: NestedEnumClothingTypeFilter<$PrismaModel>
  }

  export type NestedEnumClothingGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClothingGender | EnumClothingGenderFieldRefInput<$PrismaModel>
    in?: $Enums.ClothingGender[] | ListEnumClothingGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.ClothingGender[] | ListEnumClothingGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumClothingGenderWithAggregatesFilter<$PrismaModel> | $Enums.ClothingGender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumClothingGenderFilter<$PrismaModel>
    _max?: NestedEnumClothingGenderFilter<$PrismaModel>
  }

  export type UserCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    laptopComputers?: LaptopComputerCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneCreateNestedManyWithoutCreatedByInput
    bags?: BagCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    laptopComputers?: LaptopComputerUncheckedCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneUncheckedCreateNestedManyWithoutCreatedByInput
    bags?: BagUncheckedCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    laptopComputers?: LaptopComputerUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUpdateManyWithoutCreatedByNestedInput
    bags?: BagUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    laptopComputers?: LaptopComputerUncheckedUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUncheckedUpdateManyWithoutCreatedByNestedInput
    bags?: BagUncheckedUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateOrConnectWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostCreateManyCreatedByInputEnvelope = {
    data: PostCreateManyCreatedByInput | PostCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type LaptopComputerCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    type: $Enums.ComputerType
    brand: $Enums.LaptopBrand
    laptopSubtype?: $Enums.LaptopSubtype | null
    desktopSubtype?: $Enums.DesktopSubtype | null
    serverSubtype?: $Enums.ServerSubtype | null
    model?: string | null
    condition: $Enums.Condition
    processorType: string
    numberOfCores: number
    ram: string
    storageCapacity: string
    storageType: $Enums.StorageType
    displaySize?: string | null
    graphicsCard?: string | null
    graphicsCardMemory?: string | null
    operatingSystem: $Enums.OperatingSystem
    color: string
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaptopComputerUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    type: $Enums.ComputerType
    brand: $Enums.LaptopBrand
    laptopSubtype?: $Enums.LaptopSubtype | null
    desktopSubtype?: $Enums.DesktopSubtype | null
    serverSubtype?: $Enums.ServerSubtype | null
    model?: string | null
    condition: $Enums.Condition
    processorType: string
    numberOfCores: number
    ram: string
    storageCapacity: string
    storageType: $Enums.StorageType
    displaySize?: string | null
    graphicsCard?: string | null
    graphicsCardMemory?: string | null
    operatingSystem: $Enums.OperatingSystem
    color: string
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaptopComputerCreateOrConnectWithoutCreatedByInput = {
    where: LaptopComputerWhereUniqueInput
    create: XOR<LaptopComputerCreateWithoutCreatedByInput, LaptopComputerUncheckedCreateWithoutCreatedByInput>
  }

  export type LaptopComputerCreateManyCreatedByInputEnvelope = {
    data: LaptopComputerCreateManyCreatedByInput | LaptopComputerCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type HeadphoneCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.HeadphoneBrand
    type: $Enums.HeadphoneType
    formFactor: $Enums.HeadphoneFormFactor
    connectivity: $Enums.HeadphoneConnectivity
    resistance?: string | null
    color: string
    condition: $Enums.Condition
    features?: HeadphoneCreatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadphoneUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.HeadphoneBrand
    type: $Enums.HeadphoneType
    formFactor: $Enums.HeadphoneFormFactor
    connectivity: $Enums.HeadphoneConnectivity
    resistance?: string | null
    color: string
    condition: $Enums.Condition
    features?: HeadphoneCreatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadphoneCreateOrConnectWithoutCreatedByInput = {
    where: HeadphoneWhereUniqueInput
    create: XOR<HeadphoneCreateWithoutCreatedByInput, HeadphoneUncheckedCreateWithoutCreatedByInput>
  }

  export type HeadphoneCreateManyCreatedByInputEnvelope = {
    data: HeadphoneCreateManyCreatedByInput | HeadphoneCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type BagCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.BagBrand
    gender: $Enums.BagGender
    type: $Enums.BagType
    color: string
    condition: $Enums.Condition
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BagUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.BagBrand
    gender: $Enums.BagGender
    type: $Enums.BagType
    color: string
    condition: $Enums.Condition
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BagCreateOrConnectWithoutCreatedByInput = {
    where: BagWhereUniqueInput
    create: XOR<BagCreateWithoutCreatedByInput, BagUncheckedCreateWithoutCreatedByInput>
  }

  export type BagCreateManyCreatedByInputEnvelope = {
    data: BagCreateManyCreatedByInput | BagCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ClothingCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.ClothingBrand
    type: $Enums.ClothingType
    gender: $Enums.ClothingGender
    color: string
    condition: $Enums.Condition
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: string | null
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClothingUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.ClothingBrand
    type: $Enums.ClothingType
    gender: $Enums.ClothingGender
    color: string
    condition: $Enums.Condition
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: string | null
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClothingCreateOrConnectWithoutCreatedByInput = {
    where: ClothingWhereUniqueInput
    create: XOR<ClothingCreateWithoutCreatedByInput, ClothingUncheckedCreateWithoutCreatedByInput>
  }

  export type ClothingCreateManyCreatedByInputEnvelope = {
    data: ClothingCreateManyCreatedByInput | ClothingCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type PostUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PostCreateWithoutCreatedByInput, PostUncheckedCreateWithoutCreatedByInput>
  }

  export type PostUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutCreatedByInput, PostUncheckedUpdateWithoutCreatedByInput>
  }

  export type PostUpdateManyWithWhereWithoutCreatedByInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    name?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    createdById?: StringFilter<"Post"> | string
  }

  export type LaptopComputerUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: LaptopComputerWhereUniqueInput
    update: XOR<LaptopComputerUpdateWithoutCreatedByInput, LaptopComputerUncheckedUpdateWithoutCreatedByInput>
    create: XOR<LaptopComputerCreateWithoutCreatedByInput, LaptopComputerUncheckedCreateWithoutCreatedByInput>
  }

  export type LaptopComputerUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: LaptopComputerWhereUniqueInput
    data: XOR<LaptopComputerUpdateWithoutCreatedByInput, LaptopComputerUncheckedUpdateWithoutCreatedByInput>
  }

  export type LaptopComputerUpdateManyWithWhereWithoutCreatedByInput = {
    where: LaptopComputerScalarWhereInput
    data: XOR<LaptopComputerUpdateManyMutationInput, LaptopComputerUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type LaptopComputerScalarWhereInput = {
    AND?: LaptopComputerScalarWhereInput | LaptopComputerScalarWhereInput[]
    OR?: LaptopComputerScalarWhereInput[]
    NOT?: LaptopComputerScalarWhereInput | LaptopComputerScalarWhereInput[]
    id?: StringFilter<"LaptopComputer"> | string
    title?: StringFilter<"LaptopComputer"> | string
    category?: StringFilter<"LaptopComputer"> | string
    subcategory?: StringFilter<"LaptopComputer"> | string
    location?: EnumKenyanCountyFilter<"LaptopComputer"> | $Enums.KenyanCounty
    type?: EnumComputerTypeFilter<"LaptopComputer"> | $Enums.ComputerType
    brand?: EnumLaptopBrandFilter<"LaptopComputer"> | $Enums.LaptopBrand
    laptopSubtype?: EnumLaptopSubtypeNullableFilter<"LaptopComputer"> | $Enums.LaptopSubtype | null
    desktopSubtype?: EnumDesktopSubtypeNullableFilter<"LaptopComputer"> | $Enums.DesktopSubtype | null
    serverSubtype?: EnumServerSubtypeNullableFilter<"LaptopComputer"> | $Enums.ServerSubtype | null
    model?: StringNullableFilter<"LaptopComputer"> | string | null
    condition?: EnumConditionFilter<"LaptopComputer"> | $Enums.Condition
    processorType?: StringFilter<"LaptopComputer"> | string
    numberOfCores?: IntFilter<"LaptopComputer"> | number
    ram?: StringFilter<"LaptopComputer"> | string
    storageCapacity?: StringFilter<"LaptopComputer"> | string
    storageType?: EnumStorageTypeFilter<"LaptopComputer"> | $Enums.StorageType
    displaySize?: StringNullableFilter<"LaptopComputer"> | string | null
    graphicsCard?: StringNullableFilter<"LaptopComputer"> | string | null
    graphicsCardMemory?: StringNullableFilter<"LaptopComputer"> | string | null
    operatingSystem?: EnumOperatingSystemFilter<"LaptopComputer"> | $Enums.OperatingSystem
    color?: StringFilter<"LaptopComputer"> | string
    exchangePossible?: EnumExchangePossibleFilter<"LaptopComputer"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"LaptopComputer"> | $Enums.OpenToNegotiation
    description?: StringFilter<"LaptopComputer"> | string
    price?: StringFilter<"LaptopComputer"> | string
    phoneNumber?: StringFilter<"LaptopComputer"> | string
    createdAt?: DateTimeFilter<"LaptopComputer"> | Date | string
    updatedAt?: DateTimeFilter<"LaptopComputer"> | Date | string
    createdById?: StringFilter<"LaptopComputer"> | string
  }

  export type HeadphoneUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: HeadphoneWhereUniqueInput
    update: XOR<HeadphoneUpdateWithoutCreatedByInput, HeadphoneUncheckedUpdateWithoutCreatedByInput>
    create: XOR<HeadphoneCreateWithoutCreatedByInput, HeadphoneUncheckedCreateWithoutCreatedByInput>
  }

  export type HeadphoneUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: HeadphoneWhereUniqueInput
    data: XOR<HeadphoneUpdateWithoutCreatedByInput, HeadphoneUncheckedUpdateWithoutCreatedByInput>
  }

  export type HeadphoneUpdateManyWithWhereWithoutCreatedByInput = {
    where: HeadphoneScalarWhereInput
    data: XOR<HeadphoneUpdateManyMutationInput, HeadphoneUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type HeadphoneScalarWhereInput = {
    AND?: HeadphoneScalarWhereInput | HeadphoneScalarWhereInput[]
    OR?: HeadphoneScalarWhereInput[]
    NOT?: HeadphoneScalarWhereInput | HeadphoneScalarWhereInput[]
    id?: StringFilter<"Headphone"> | string
    title?: StringFilter<"Headphone"> | string
    category?: StringFilter<"Headphone"> | string
    subcategory?: StringFilter<"Headphone"> | string
    location?: EnumKenyanCountyFilter<"Headphone"> | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFilter<"Headphone"> | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFilter<"Headphone"> | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFilter<"Headphone"> | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFilter<"Headphone"> | $Enums.HeadphoneConnectivity
    resistance?: StringNullableFilter<"Headphone"> | string | null
    color?: StringFilter<"Headphone"> | string
    condition?: EnumConditionFilter<"Headphone"> | $Enums.Condition
    features?: EnumHeadphoneFeatureNullableListFilter<"Headphone">
    exchangePossible?: EnumExchangePossibleFilter<"Headphone"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"Headphone"> | $Enums.OpenToNegotiation
    description?: StringFilter<"Headphone"> | string
    price?: StringFilter<"Headphone"> | string
    phoneNumber?: StringFilter<"Headphone"> | string
    createdAt?: DateTimeFilter<"Headphone"> | Date | string
    updatedAt?: DateTimeFilter<"Headphone"> | Date | string
    createdById?: StringFilter<"Headphone"> | string
  }

  export type BagUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: BagWhereUniqueInput
    update: XOR<BagUpdateWithoutCreatedByInput, BagUncheckedUpdateWithoutCreatedByInput>
    create: XOR<BagCreateWithoutCreatedByInput, BagUncheckedCreateWithoutCreatedByInput>
  }

  export type BagUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: BagWhereUniqueInput
    data: XOR<BagUpdateWithoutCreatedByInput, BagUncheckedUpdateWithoutCreatedByInput>
  }

  export type BagUpdateManyWithWhereWithoutCreatedByInput = {
    where: BagScalarWhereInput
    data: XOR<BagUpdateManyMutationInput, BagUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type BagScalarWhereInput = {
    AND?: BagScalarWhereInput | BagScalarWhereInput[]
    OR?: BagScalarWhereInput[]
    NOT?: BagScalarWhereInput | BagScalarWhereInput[]
    id?: StringFilter<"Bag"> | string
    title?: StringFilter<"Bag"> | string
    category?: StringFilter<"Bag"> | string
    subcategory?: StringFilter<"Bag"> | string
    location?: EnumKenyanCountyFilter<"Bag"> | $Enums.KenyanCounty
    brand?: EnumBagBrandFilter<"Bag"> | $Enums.BagBrand
    gender?: EnumBagGenderFilter<"Bag"> | $Enums.BagGender
    type?: EnumBagTypeFilter<"Bag"> | $Enums.BagType
    color?: StringFilter<"Bag"> | string
    condition?: EnumConditionFilter<"Bag"> | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFilter<"Bag"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"Bag"> | $Enums.OpenToNegotiation
    description?: StringFilter<"Bag"> | string
    price?: StringFilter<"Bag"> | string
    phoneNumber?: StringFilter<"Bag"> | string
    createdAt?: DateTimeFilter<"Bag"> | Date | string
    updatedAt?: DateTimeFilter<"Bag"> | Date | string
    createdById?: StringFilter<"Bag"> | string
  }

  export type ClothingUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ClothingWhereUniqueInput
    update: XOR<ClothingUpdateWithoutCreatedByInput, ClothingUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ClothingCreateWithoutCreatedByInput, ClothingUncheckedCreateWithoutCreatedByInput>
  }

  export type ClothingUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ClothingWhereUniqueInput
    data: XOR<ClothingUpdateWithoutCreatedByInput, ClothingUncheckedUpdateWithoutCreatedByInput>
  }

  export type ClothingUpdateManyWithWhereWithoutCreatedByInput = {
    where: ClothingScalarWhereInput
    data: XOR<ClothingUpdateManyMutationInput, ClothingUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ClothingScalarWhereInput = {
    AND?: ClothingScalarWhereInput | ClothingScalarWhereInput[]
    OR?: ClothingScalarWhereInput[]
    NOT?: ClothingScalarWhereInput | ClothingScalarWhereInput[]
    id?: StringFilter<"Clothing"> | string
    title?: StringFilter<"Clothing"> | string
    category?: StringFilter<"Clothing"> | string
    subcategory?: StringFilter<"Clothing"> | string
    location?: EnumKenyanCountyFilter<"Clothing"> | $Enums.KenyanCounty
    brand?: EnumClothingBrandFilter<"Clothing"> | $Enums.ClothingBrand
    type?: EnumClothingTypeFilter<"Clothing"> | $Enums.ClothingType
    gender?: EnumClothingGenderFilter<"Clothing"> | $Enums.ClothingGender
    color?: StringFilter<"Clothing"> | string
    condition?: EnumConditionFilter<"Clothing"> | $Enums.Condition
    madeInKenya?: BoolFilter<"Clothing"> | boolean
    hasWarranty?: BoolFilter<"Clothing"> | boolean
    warrantyPeriod?: StringNullableFilter<"Clothing"> | string | null
    exchangePossible?: EnumExchangePossibleFilter<"Clothing"> | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFilter<"Clothing"> | $Enums.OpenToNegotiation
    description?: StringFilter<"Clothing"> | string
    price?: StringFilter<"Clothing"> | string
    phoneNumber?: StringFilter<"Clothing"> | string
    createdAt?: DateTimeFilter<"Clothing"> | Date | string
    updatedAt?: DateTimeFilter<"Clothing"> | Date | string
    createdById?: StringFilter<"Clothing"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneCreateNestedManyWithoutCreatedByInput
    bags?: BagCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerUncheckedCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneUncheckedCreateNestedManyWithoutCreatedByInput
    bags?: BagUncheckedCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUpdateManyWithoutCreatedByNestedInput
    bags?: BagUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUncheckedUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUncheckedUpdateManyWithoutCreatedByNestedInput
    bags?: BagUncheckedUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneCreateNestedManyWithoutCreatedByInput
    bags?: BagCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerUncheckedCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneUncheckedCreateNestedManyWithoutCreatedByInput
    bags?: BagUncheckedCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUpdateManyWithoutCreatedByNestedInput
    bags?: BagUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUncheckedUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUncheckedUpdateManyWithoutCreatedByNestedInput
    bags?: BagUncheckedUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutLaptopComputersInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneCreateNestedManyWithoutCreatedByInput
    bags?: BagCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutLaptopComputersInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneUncheckedCreateNestedManyWithoutCreatedByInput
    bags?: BagUncheckedCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutLaptopComputersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLaptopComputersInput, UserUncheckedCreateWithoutLaptopComputersInput>
  }

  export type UserUpsertWithoutLaptopComputersInput = {
    update: XOR<UserUpdateWithoutLaptopComputersInput, UserUncheckedUpdateWithoutLaptopComputersInput>
    create: XOR<UserCreateWithoutLaptopComputersInput, UserUncheckedCreateWithoutLaptopComputersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLaptopComputersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLaptopComputersInput, UserUncheckedUpdateWithoutLaptopComputersInput>
  }

  export type UserUpdateWithoutLaptopComputersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUpdateManyWithoutCreatedByNestedInput
    bags?: BagUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLaptopComputersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUncheckedUpdateManyWithoutCreatedByNestedInput
    bags?: BagUncheckedUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutHeadphonesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerCreateNestedManyWithoutCreatedByInput
    bags?: BagCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutHeadphonesInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerUncheckedCreateNestedManyWithoutCreatedByInput
    bags?: BagUncheckedCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutHeadphonesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHeadphonesInput, UserUncheckedCreateWithoutHeadphonesInput>
  }

  export type UserUpsertWithoutHeadphonesInput = {
    update: XOR<UserUpdateWithoutHeadphonesInput, UserUncheckedUpdateWithoutHeadphonesInput>
    create: XOR<UserCreateWithoutHeadphonesInput, UserUncheckedCreateWithoutHeadphonesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHeadphonesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHeadphonesInput, UserUncheckedUpdateWithoutHeadphonesInput>
  }

  export type UserUpdateWithoutHeadphonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUpdateManyWithoutCreatedByNestedInput
    bags?: BagUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutHeadphonesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUncheckedUpdateManyWithoutCreatedByNestedInput
    bags?: BagUncheckedUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutBagsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutBagsInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerUncheckedCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneUncheckedCreateNestedManyWithoutCreatedByInput
    clothing?: ClothingUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutBagsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBagsInput, UserUncheckedCreateWithoutBagsInput>
  }

  export type UserUpsertWithoutBagsInput = {
    update: XOR<UserUpdateWithoutBagsInput, UserUncheckedUpdateWithoutBagsInput>
    create: XOR<UserCreateWithoutBagsInput, UserUncheckedCreateWithoutBagsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBagsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBagsInput, UserUncheckedUpdateWithoutBagsInput>
  }

  export type UserUpdateWithoutBagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUncheckedUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUncheckedUpdateManyWithoutCreatedByNestedInput
    clothing?: ClothingUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutClothingInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneCreateNestedManyWithoutCreatedByInput
    bags?: BagCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutClothingInput = {
    id: string
    name: string
    email: string
    emailVerified?: boolean
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutCreatedByInput
    laptopComputers?: LaptopComputerUncheckedCreateNestedManyWithoutCreatedByInput
    headphones?: HeadphoneUncheckedCreateNestedManyWithoutCreatedByInput
    bags?: BagUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutClothingInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClothingInput, UserUncheckedCreateWithoutClothingInput>
  }

  export type UserUpsertWithoutClothingInput = {
    update: XOR<UserUpdateWithoutClothingInput, UserUncheckedUpdateWithoutClothingInput>
    create: XOR<UserCreateWithoutClothingInput, UserUncheckedCreateWithoutClothingInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClothingInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClothingInput, UserUncheckedUpdateWithoutClothingInput>
  }

  export type UserUpdateWithoutClothingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUpdateManyWithoutCreatedByNestedInput
    bags?: BagUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutClothingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutCreatedByNestedInput
    laptopComputers?: LaptopComputerUncheckedUpdateManyWithoutCreatedByNestedInput
    headphones?: HeadphoneUncheckedUpdateManyWithoutCreatedByNestedInput
    bags?: BagUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    expiresAt: Date | string
    token: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostCreateManyCreatedByInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaptopComputerCreateManyCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    type: $Enums.ComputerType
    brand: $Enums.LaptopBrand
    laptopSubtype?: $Enums.LaptopSubtype | null
    desktopSubtype?: $Enums.DesktopSubtype | null
    serverSubtype?: $Enums.ServerSubtype | null
    model?: string | null
    condition: $Enums.Condition
    processorType: string
    numberOfCores: number
    ram: string
    storageCapacity: string
    storageType: $Enums.StorageType
    displaySize?: string | null
    graphicsCard?: string | null
    graphicsCardMemory?: string | null
    operatingSystem: $Enums.OperatingSystem
    color: string
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeadphoneCreateManyCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.HeadphoneBrand
    type: $Enums.HeadphoneType
    formFactor: $Enums.HeadphoneFormFactor
    connectivity: $Enums.HeadphoneConnectivity
    resistance?: string | null
    color: string
    condition: $Enums.Condition
    features?: HeadphoneCreatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BagCreateManyCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.BagBrand
    gender: $Enums.BagGender
    type: $Enums.BagType
    color: string
    condition: $Enums.Condition
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClothingCreateManyCreatedByInput = {
    id?: string
    title: string
    category?: string
    subcategory?: string
    location: $Enums.KenyanCounty
    brand: $Enums.ClothingBrand
    type: $Enums.ClothingType
    gender: $Enums.ClothingGender
    color: string
    condition: $Enums.Condition
    madeInKenya?: boolean
    hasWarranty?: boolean
    warrantyPeriod?: string | null
    exchangePossible: $Enums.ExchangePossible
    openToNegotiation: $Enums.OpenToNegotiation
    description: string
    price: string
    phoneNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopComputerUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    type?: EnumComputerTypeFieldUpdateOperationsInput | $Enums.ComputerType
    brand?: EnumLaptopBrandFieldUpdateOperationsInput | $Enums.LaptopBrand
    laptopSubtype?: NullableEnumLaptopSubtypeFieldUpdateOperationsInput | $Enums.LaptopSubtype | null
    desktopSubtype?: NullableEnumDesktopSubtypeFieldUpdateOperationsInput | $Enums.DesktopSubtype | null
    serverSubtype?: NullableEnumServerSubtypeFieldUpdateOperationsInput | $Enums.ServerSubtype | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    processorType?: StringFieldUpdateOperationsInput | string
    numberOfCores?: IntFieldUpdateOperationsInput | number
    ram?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCard?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCardMemory?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: EnumOperatingSystemFieldUpdateOperationsInput | $Enums.OperatingSystem
    color?: StringFieldUpdateOperationsInput | string
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopComputerUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    type?: EnumComputerTypeFieldUpdateOperationsInput | $Enums.ComputerType
    brand?: EnumLaptopBrandFieldUpdateOperationsInput | $Enums.LaptopBrand
    laptopSubtype?: NullableEnumLaptopSubtypeFieldUpdateOperationsInput | $Enums.LaptopSubtype | null
    desktopSubtype?: NullableEnumDesktopSubtypeFieldUpdateOperationsInput | $Enums.DesktopSubtype | null
    serverSubtype?: NullableEnumServerSubtypeFieldUpdateOperationsInput | $Enums.ServerSubtype | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    processorType?: StringFieldUpdateOperationsInput | string
    numberOfCores?: IntFieldUpdateOperationsInput | number
    ram?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCard?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCardMemory?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: EnumOperatingSystemFieldUpdateOperationsInput | $Enums.OperatingSystem
    color?: StringFieldUpdateOperationsInput | string
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaptopComputerUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    type?: EnumComputerTypeFieldUpdateOperationsInput | $Enums.ComputerType
    brand?: EnumLaptopBrandFieldUpdateOperationsInput | $Enums.LaptopBrand
    laptopSubtype?: NullableEnumLaptopSubtypeFieldUpdateOperationsInput | $Enums.LaptopSubtype | null
    desktopSubtype?: NullableEnumDesktopSubtypeFieldUpdateOperationsInput | $Enums.DesktopSubtype | null
    serverSubtype?: NullableEnumServerSubtypeFieldUpdateOperationsInput | $Enums.ServerSubtype | null
    model?: NullableStringFieldUpdateOperationsInput | string | null
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    processorType?: StringFieldUpdateOperationsInput | string
    numberOfCores?: IntFieldUpdateOperationsInput | number
    ram?: StringFieldUpdateOperationsInput | string
    storageCapacity?: StringFieldUpdateOperationsInput | string
    storageType?: EnumStorageTypeFieldUpdateOperationsInput | $Enums.StorageType
    displaySize?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCard?: NullableStringFieldUpdateOperationsInput | string | null
    graphicsCardMemory?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: EnumOperatingSystemFieldUpdateOperationsInput | $Enums.OperatingSystem
    color?: StringFieldUpdateOperationsInput | string
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadphoneUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFieldUpdateOperationsInput | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFieldUpdateOperationsInput | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFieldUpdateOperationsInput | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFieldUpdateOperationsInput | $Enums.HeadphoneConnectivity
    resistance?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    features?: HeadphoneUpdatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadphoneUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFieldUpdateOperationsInput | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFieldUpdateOperationsInput | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFieldUpdateOperationsInput | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFieldUpdateOperationsInput | $Enums.HeadphoneConnectivity
    resistance?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    features?: HeadphoneUpdatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadphoneUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumHeadphoneBrandFieldUpdateOperationsInput | $Enums.HeadphoneBrand
    type?: EnumHeadphoneTypeFieldUpdateOperationsInput | $Enums.HeadphoneType
    formFactor?: EnumHeadphoneFormFactorFieldUpdateOperationsInput | $Enums.HeadphoneFormFactor
    connectivity?: EnumHeadphoneConnectivityFieldUpdateOperationsInput | $Enums.HeadphoneConnectivity
    resistance?: NullableStringFieldUpdateOperationsInput | string | null
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    features?: HeadphoneUpdatefeaturesInput | $Enums.HeadphoneFeature[]
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BagUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumBagBrandFieldUpdateOperationsInput | $Enums.BagBrand
    gender?: EnumBagGenderFieldUpdateOperationsInput | $Enums.BagGender
    type?: EnumBagTypeFieldUpdateOperationsInput | $Enums.BagType
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BagUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumBagBrandFieldUpdateOperationsInput | $Enums.BagBrand
    gender?: EnumBagGenderFieldUpdateOperationsInput | $Enums.BagGender
    type?: EnumBagTypeFieldUpdateOperationsInput | $Enums.BagType
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BagUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumBagBrandFieldUpdateOperationsInput | $Enums.BagBrand
    gender?: EnumBagGenderFieldUpdateOperationsInput | $Enums.BagGender
    type?: EnumBagTypeFieldUpdateOperationsInput | $Enums.BagType
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothingUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumClothingBrandFieldUpdateOperationsInput | $Enums.ClothingBrand
    type?: EnumClothingTypeFieldUpdateOperationsInput | $Enums.ClothingType
    gender?: EnumClothingGenderFieldUpdateOperationsInput | $Enums.ClothingGender
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    madeInKenya?: BoolFieldUpdateOperationsInput | boolean
    hasWarranty?: BoolFieldUpdateOperationsInput | boolean
    warrantyPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothingUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumClothingBrandFieldUpdateOperationsInput | $Enums.ClothingBrand
    type?: EnumClothingTypeFieldUpdateOperationsInput | $Enums.ClothingType
    gender?: EnumClothingGenderFieldUpdateOperationsInput | $Enums.ClothingGender
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    madeInKenya?: BoolFieldUpdateOperationsInput | boolean
    hasWarranty?: BoolFieldUpdateOperationsInput | boolean
    warrantyPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClothingUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    subcategory?: StringFieldUpdateOperationsInput | string
    location?: EnumKenyanCountyFieldUpdateOperationsInput | $Enums.KenyanCounty
    brand?: EnumClothingBrandFieldUpdateOperationsInput | $Enums.ClothingBrand
    type?: EnumClothingTypeFieldUpdateOperationsInput | $Enums.ClothingType
    gender?: EnumClothingGenderFieldUpdateOperationsInput | $Enums.ClothingGender
    color?: StringFieldUpdateOperationsInput | string
    condition?: EnumConditionFieldUpdateOperationsInput | $Enums.Condition
    madeInKenya?: BoolFieldUpdateOperationsInput | boolean
    hasWarranty?: BoolFieldUpdateOperationsInput | boolean
    warrantyPeriod?: NullableStringFieldUpdateOperationsInput | string | null
    exchangePossible?: EnumExchangePossibleFieldUpdateOperationsInput | $Enums.ExchangePossible
    openToNegotiation?: EnumOpenToNegotiationFieldUpdateOperationsInput | $Enums.OpenToNegotiation
    description?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}